import {db} from "../db.js"
import jwt from "jsonwebtoken"

export const getPosts=async(req,res)=>{
    //verification de la categorie
    console.log(req.query.cat)
   const q =req.query.cat 
   ? "SELECT * FROM posts WHERE cat=?"
   : "SELECT * FROM posts"

   db.query(q,[req.query.cat],(err,data)=>{
    if(err) return res.send(err)
  
    return res.status(200).send(data)
   })

}
export const getPost=async(req,res)=>{
    const q= "SELECT  `username`, `title`,p.username, `desc_p`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? "
    db.query(q,[req.params.id],(error,data)=>{
        if(error) return res.json(error)

        return res.status(200).send(data[0])
    })
}
export const addPost=async(req,res)=>{
    res.json("add post !")
}
export const deletePost=async(req,res)=>{
   const token=req.cookies.access_token
   if(!token) return res.status(401).json("Not authenticated")

   jwt.verify(token,process.env.JWT_KEY,(err,userInfo)=>{
    if(err) return res.status(403).json("token is not valid")

    const postId = req.params.id
    const q="DELETE FROM posts WHERE `id`=? AND `uid`= ? "

    db.query(q,[postId,userInfo.id], (err,data)=>{
        if(err) return res.status(403).json("you can delete only your post!")

        return res.json("Post has been deleted!")
    })
   })
}
export const updatePost=async(req,res)=>{
    res.json("add post !")
}