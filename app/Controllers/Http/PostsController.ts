import Post from 'App/Models/Post'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {

  public async index() {
    const posts = await Post.query().preload('user')

    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title', 'content', 'user_id'])

    const post = await Post.create(data)

    return post
  }
}
