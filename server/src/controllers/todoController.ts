import { Request, Response } from "express";
import { Todo } from "../models/Todo"; // Предполагаем, что у вас есть модель Todo

// Получение всех задач
export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.error("Ошибка при получении задач:", error);
    res.status(500).json({ error: "Ошибка при получении задач" });
  }
};

// Создание новой задачи
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newTodo = await Todo.create({ title, description });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Ошибка при создании задачи:", error);
    res.status(500).json({ error: "Ошибка при создании задачи" });
  }
};

// Обновление задачи по ID
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const todo = await Todo.findByPk(id);
    if (!todo) {
      res.status(404).json({ error: "Задача не найдена" });
      return;
    }

    // Обновление полей задачи
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    console.error("Ошибка при обновлении задачи:", error);
    res.status(500).json({ error: "Ошибка при обновлении задачи" });
  }
};

// Удаление задачи по ID
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Задача не найдена" });
    }
  } catch (error) {
    console.error("Ошибка при удалении задачи:", error);
    res.status(500).json({ error: "Ошибка при удалении задачи" });
  }
};
