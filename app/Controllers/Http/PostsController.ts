import Post from 'App/Models/Post'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {

  public async index() {
    const post = await Post.all()

    return post
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title', 'content'])

    const post = await Post.create(data)

    return post
  }
}
