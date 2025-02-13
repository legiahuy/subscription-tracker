import { Router } from "express";
import authorize from '../middlewares/auth.middleware.js'
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {res.send({title: "GET all subscription"})})

subscriptionRouter.get('/:id', (req, res) => {res.send({title: "GET subsciption details"})})

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {res.send({title: "UPDATE subsciption details"})})

subscriptionRouter.delete('/:id', (req, res) => {res.send({title: "DELETE a subsciption"})})

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => {res.send({title: "CANCEL subsciption"})})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {res.send({title: "GET upcoming renewals"})})

export default subscriptionRouter