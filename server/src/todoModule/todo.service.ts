import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './model/todo.model';
import { NewTodoDto } from './dto/newTodo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private readonly todoModel: typeof Todo) {}

  getTodos() {
    return this.todoModel.findAll();
  }

  getTodoById(id: number) {
    return this.todoModel.findByPk(id);
  }

  createTodo({ todo }: NewTodoDto) {
    return this.todoModel.create({
      todo,
      done: false,
    });
  }

  deleteTodoById(id: number) {
    return this.todoModel.destroy({
      where: {
        id,
      },
    });
  }

  async updateTodoById(id: number, todo: string) {
    await this.todoModel.update({ todo }, { where: { id } });
    return this.todoModel.findByPk(id);
  }

  async toggleDone(id: number) {
    const todo = await this.todoModel.findByPk(id);
    await this.todoModel.update({ done: !todo.done }, { where: { id } });
    return this.todoModel.findByPk(id);
  }
}
