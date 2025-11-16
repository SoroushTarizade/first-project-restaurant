import { generateAccessToken, generateRefreshToken, ValidateEmail, ValidatePassword, verifyPassword } from "@/utils/auth";
import UserModel from '@/models/User'
import connectToDB from "@/configs/db";

export async function POST(req) {
    try {
        connectToDB()
        const body = await req.json();
        const {email,password} = body;
    
        //validation
        const isValidEmail = ValidateEmail(email);
        const isValidPassword = ValidatePassword(password);
        
        if (!isValidEmail || !isValidPassword){
            return Response.json(
                {message: "your email or password is vallid"},
                {status:419}
            );
        }
        const user = await UserModel.find({email});
    
        if(!user){
            return Response.json(
                {message: " user not found"},
                {status:422}
            );
        }
        const isCorrectPasswordWithHash = verifyPassword(password, user.password);
        if(!isCorrectPasswordWithHash){
            return Response.json(
                {message:"Email or password is not correct"},
                {status:401}
            );
        }
    
        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});

        await UserModel.findOneAndUpdate({email},{
            $set:{
                refreshToken
            }
        })
        return Response.json({msg:"User logged in successfully"},
            {
            status:200,
            headers:{
                "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;`
            }
        }
    )
    } catch (err){
        console.log("Err =>", err);
                return Response.json({msg:"User logged in successfully"},
            {
            status:200,
        }
      )      
    }
}