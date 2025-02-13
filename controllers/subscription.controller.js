import Subscription from '../models/subscription.model.js'

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        })

        return res.status(201).json({ success: true, data: subscription});
    } catch (error) {
        next(error);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        if(req.user.id !== req.params.id) {
            const error = new Error('You are not the owner of this account');
            error.statusCode = 401;
            throw error;
        }

        const subsciptions =  await Subscription.find({user: req.params.id});

        return res.status(200).json({success: true, data: subsciptions});
    } catch (error) {
        next(error);
    }
}