import Mock from 'mockjs'
import {users} from "@/database"

Mock.mock('/login', (data) => {
  const uploadUser = JSON.parse(data.body)
  const loginUser = {
    ...users.find((user) => {
        return user.userName === uploadUser.userName && user.password === uploadUser.password
      }
    )
  }
  delete loginUser.password
  return loginUser
})
