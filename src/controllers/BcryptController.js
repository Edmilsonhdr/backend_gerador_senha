const bcrypt = require('bcryptjs');

class BcryptController {
    constructor() { }

    async hashPassword(req, res) {
        try {
            const { length, easyToRead, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = req.body;

            let charset = '';
            if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
            if (includeNumbers) charset += '0123456789';
            if (includeSymbols) charset += '!@#$%^&*()-_+=~`[]{}|;:,.<>?';

            let password = '';
            for (let i = 0; i < length; i++) {
                password += charset.charAt(Math.floor(Math.random() * charset.length));
            }

            if (easyToRead) {
                password = password.replace(/l/g, 'L').replace(/1/g, 'one').replace(/0/g, 'o').replace(/O/g, 'oh');
            }


            // Gera um hash para a senha fornecida
            const hashedPassword = await bcrypt.hash(password, 10);
            res.status(200).json({ password, hashedPassword });
        } catch (error) {
            console.error('Erro ao gerar senha:', error);
            res.status(500).json({ error: 'Erro ao gerar senha' });
        }
    }
}

module.exports = BcryptController;




