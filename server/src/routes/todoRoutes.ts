import express from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todoController";

const router = express.Router();

// Получение всех задач
router.get("/todos", getTodos);

// Создание новой задачи
router.post("/todos", createTodo);

// Создание новой задачи
router.put("/todos/:id", updateTodo);

// Удаление задачи по ID
router.delete("/todos/:id", deleteTodo);

export default router;
