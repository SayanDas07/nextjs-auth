import { NextResponse } from "next/server";


export async function GET() {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )

        //just make the cookie as null
        response.cookies.set("token", "", 
        { httpOnly: true, expires: new Date(0) 
        });
        return response;
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false
        });
    }
        
    }
