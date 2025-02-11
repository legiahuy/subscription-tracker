import { Router } from "express";
const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {res.send({title: "GET all subscription"})})

subscriptionRouter.get('/:id', (req, res) => {res.send({title: "GET subsciption details"})})

subscriptionRouter.post('/', (req, res) => {res.send({title: "CREATE a subsciption"})})

subscriptionRouter.put('/:id', (req, res) => {res.send({title: "UPDATE subsciption details"})})

subscriptionRouter.delete('/:id', (req, res) => {res.send({title: "DELETE a subsciption"})})

subscriptionRouter.get('/user/:id', (req, res) => {res.send({title: "GET all user subsciptions"})})

subscriptionRouter.put('/:id/cancel', (req, res) => {res.send({title: "CANCEL subsciption"})})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {res.send({title: "GET upcoming renewals"})})

export default subscriptionRouter