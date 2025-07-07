import * as authRepository from "../repositories/authRepository.js";

export async function verificarEmailExiste(req, res, next) {
    const { email } = req.body

    try {
        const usuario = await authRepository.findUserByEmail(email);
        if (usuario) {
            return res.status(400).json({ erro: "Email já cadastrado" })
        }
        next()
    } catch (error) {
        console.error("Erro no middleware de verificação do email", error)
        return res.status(500).json({ erro: "Erro interno do servidor" })

    }


}