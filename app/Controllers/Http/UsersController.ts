import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index() {
    const user = await User.query().preload('posts')
    return user
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name'])

    const user = await User.create(data)

    return user
  }
}
