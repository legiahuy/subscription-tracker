import { Router } from 'express'
import { signUp, signOut, signIn } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.post('/sign-up', signUp)
authRouter.post('/sign-in', signIn)
authRouter.post('/sign-out', signOut)

export default authRouter