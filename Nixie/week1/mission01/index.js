document.addEventListener('DOMContentLoaded', function() {
    const signUpBtn = document.querySelector('.signUpBtn');
    const closeBtn = document.getElementById('closeBtn');

    signUpBtn.addEventListener('click', function() {
        const nameInput = document.querySelector('.name_input');
        const nameMsg = document.createElement('div');
        nameMsg.classList.add('name-msg');
        nameMsg.style.color = 'green';
        nameMsg.textContent = '멋진 이름이네요!';

        const emailInput = document.querySelector('.email_input');
        const isValidEmail = validateEmail(emailInput.value);

        const errorMsg = document.createElement('div');
        errorMsg.classList.add('error-msg');
        errorMsg.style.color = 'red';

        const successMsg = document.createElement('div');
        successMsg.classList.add('success-msg');
        successMsg.style.color = 'green';

        if (nameInput.value === '') {
            nameMsg.textContent = '필수 입력 항목입니다!';
            nameMsg.style.color = 'red';
            displayMessage(nameInput, nameMsg);
        } else if (!/^[a-zA-Zㄱ-힣]+$/.test(nameInput.value)) {
            nameMsg.textContent = '문자를 입력하세요!';
            nameMsg.style.color = 'red';
            displayMessage(nameInput, nameMsg);
        } else {
            displayMessage(nameInput, nameMsg);
        }

        if (emailInput.value === '') {
            errorMsg.textContent = '이메일은 반드시 입력해야 합니다!';
            displayMessage(emailInput, errorMsg);
        } else if (!isValidEmail) {
            errorMsg.textContent = '올바른 이메일 형식이 아닙니다!';
            displayMessage(emailInput, errorMsg);
        } else {
            successMsg.textContent = '올바른 이메일 형식입니다!';
            displayMessage(emailInput, successMsg);
        }

        const ageInput = document.querySelector('.age_input');
        const ageMsg = document.createElement('div');
        ageMsg.classList.add('age-msg');
        ageMsg.style.color = 'red';
        
        const age = parseFloat(ageInput.value);

        if (isNaN(age)) {
            ageMsg.textContent = '나이는 숫자를 입력해야 합니다!';
            displayMessage(ageInput, ageMsg);
        } else if (age < 0) {
            ageMsg.textContent = '나이는 음수가 될 수 없습니다!';
            displayMessage(ageInput, ageMsg);
        } else if (age % 1 !== 0) {
            ageMsg.textContent = '나이는 소수가 될 수 없습니다!';
            displayMessage(ageInput, ageMsg);
        } else if (age < 19) {
            ageMsg.textContent = '우리 영화 사이트는 19살 이상만 가입이 가능합니다!';
            displayMessage(ageInput, ageMsg);
        } else {
            displayMessage(ageInput, ageMsg);
            ageMsg.textContent = '올바른 나이 형식입니다!';
            ageMsg.style.color = 'green';
        }

        const passwordInput = document.querySelector('.password_input');
        const passwordMsg = document.createElement('div');
        passwordMsg.classList.add('password-msg');
        passwordMsg.style.color = 'red';
        
        const password = passwordInput.value;
        const passwordLength = password.length;

        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

        if (password === '') {
            passwordMsg.textContent = '비밀번호는 반드시 입력해야 합니다!';
            displayMessage(passwordInput, passwordMsg);
        } else if (passwordLength < 4) {
            passwordMsg.textContent = '비밀번호는 최소 4자리 이상이어야 합니다!';
            displayMessage(passwordInput, passwordMsg);
        } else if (passwordLength > 12) {
            passwordMsg.textContent = '비밀번호는 최대 12자리까지 가능합니다!';
            displayMessage(passwordInput, passwordMsg);
        } else if (!hasLowerCase || !hasUpperCase || !hasNumber || !hasSpecial) {
            passwordMsg.textContent = '영어, 숫자, 특수문자 모두 작성해야 합니다!';
            displayMessage(passwordInput, passwordMsg);
        } else {
            passwordMsg.textContent = '올바른 비밀번호 형식입니다!';
            passwordMsg.style.color = 'green';
            displayMessage(passwordInput, passwordMsg);
        }

        const confirmPasswordInput = document.querySelector('.check_input');
        const confirmPasswordMsg = document.createElement('div');
        confirmPasswordMsg.classList.add('confirm-password-msg');
        confirmPasswordMsg.style.color = 'red';

        if (confirmPasswordInput.value === '') {
            confirmPasswordMsg.textContent = '비밀번호 확인은 반드시 입력해야 합니다!';
            displayMessage(confirmPasswordInput, confirmPasswordMsg);
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordMsg.textContent = '비밀번호가 일치하지 않습니다!';
            displayMessage(confirmPasswordInput, confirmPasswordMsg);
        } else {
            confirmPasswordMsg.textContent = '비밀번호가 일치합니다!';
            confirmPasswordMsg.style.color = 'green';
            displayMessage(confirmPasswordInput, confirmPasswordMsg);
        }

        if (isValidEmail && nameInput.value !== '' && !isNaN(age) && age >= 19 && password !== '' && passwordLength >= 4 && passwordLength <= 12 && hasLowerCase && hasUpperCase && hasNumber && hasSpecial && confirmPasswordInput.value === passwordInput.value) {
            displayModal();
        }
    });
    
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    function validateEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    function displayMessage(input, message) {
        const box = input.parentElement;
        const existingMessage = box.querySelector('.name-msg, .error-msg, .success-msg, .age-msg, .password-msg, .confirm-password-msg');
        if (existingMessage) {
            box.removeChild(existingMessage);
        }
        box.appendChild(message);
    }

    function displayModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    }
    function closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
        const form = document.querySelector('form');
        form.reset();
    }
});
