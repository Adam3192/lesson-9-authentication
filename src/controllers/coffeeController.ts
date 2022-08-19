import { RequestHandler } from "express";
import { Coffee } from "../models/coffee";

export const defaultCoffee: RequestHandler = (req, res, next) => {
    res.redirect('/coffee');
}

export const allCoffee: RequestHandler = async (req, res, next) => {
    let coffeeList: Coffee[] = await Coffee.findAll();
    res.render('all-coffee', { coffeeList });
}

export const oneCoffee: RequestHandler = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let coffeeItem: Coffee | null = await Coffee.findByPk(itemId);

    if (coffeeItem) {
        res.render('coffee-detail', { foundCoffee: coffeeItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
}

export const addCoffeePage: RequestHandler = (req, res, next) => {
    res.render('add-coffee');
}

export const addCoffee: RequestHandler = async (req, res, next) => {
    let newCoffee: Coffee = req.body;
    await Coffee.create(newCoffee);
    res.redirect('/coffee');
}

export const editCoffeePage: RequestHandler = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let coffeeItem: Coffee | null = await Coffee.findOne({
        where: { coffeeId: itemId }
    });

    if (coffeeItem) {
        res.render('edit-coffee', { foundCoffee: coffeeItem });
    }
    else {
        res.status(404).render('error', { message: 'coffee not found' });
    }
}

export const editCoffee: RequestHandler = async (req, res, next) => {
    let itemId = req.params.coffeeId;
    let updatedItem: Coffee = req.body;

    let [updated] = await Coffee.update(updatedItem, {
        where: { coffeeId: itemId }
    });

    if (updated === 1) {
        res.redirect('/coffee');
    }
    else {
        res.render('error', { message: 'Coffee could not be updated' });
    }
}

export const deleteCoffee: RequestHandler = async (req, res, next) => {
    let itemId = req.params.coffeeId;

    let deleted = await Coffee.destroy({
        where: { coffeeId: itemId }
    });

    if (deleted) {
        res.redirect('/coffee')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find item' });
    }
}