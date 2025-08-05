# Project S E T U P

> npm init y

> npm i express dotenv mongoose jsonwebtoken stripe cloudinary cookie-parser bcryptjs ioredis



# U P S T A S H (https://upstash.com/)

// Redis is a key-value store. You can think of it as a giant JSON.
// run redis file:

> node backend/lib/redis.js

when the accessToken is expired
we need the refreshToken to create a new accessToken

# C L O U D I N A R Y (https://console.cloudinary.com/) (via github account)

get 'Cloud name' and 'api key', and insert them in .env

product.toJSON()
acts like a cleanup crew.
It takes that special Mongoose Document
and transforms it into a clean, plain JavaScript object

# Payment Route

router.post("/create-checkout-session" ...) // returns {id:session.\_id, totalAmount}
router.post("/checkout-success" ...) // returns

# console.log(dailySalesData) - analytics.controller

// example of dailySalesData
[
{
_id:"2024-08-18",
sales:12,
revenue:1450.75
},
{
_id:"2024-08-19",
sales:2,
revenue:130.25
},
]

# FRONTEND SETUP

C:\Users\nzamp\Desktop\e-commerce-store\frontend>npm create vite@latest .

> npm i axios @stripe/stripe-js framer-motion lucide-react react-confetti react-hot-toast react-router-dom recharts zustand


# BUILD 
root:
...
 "build":"npm install && npm install --prefix frontend && npm run build --prefix frontend"
...

>npm 