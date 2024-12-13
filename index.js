// npm init
// npm i nodemon
// npm i dotenv
// in .env file API_KEY=your_api_key
// npm i // to re install all the dependency
// npm run start

require('dotenv').config();
const OpenAI = require("openai")
const openai = new OpenAI({apiKey : process.env.API_KEY})

//For text
async function getText(){
    const completion = await openai.chat.completions.create({
        messages :[
            {
                "role":"system",
                "content":"You are a helpful assistant"
            },
            {
                "role" :"user",
                "content":"What day is Christmas"
            }
        ],
        model: "gpt-4o"
    })
    console.log(completion.choices[0].message.content)
}
getText()

//For Image
async function getImage (){
    const completion = await openai.chat.completions.create({
        messages :[
            {
                role: "user",
                content : [
                    {
                        type : "text", text : "What is this creature?"
                    },
                    {
                        type : "image_url", image_url: {
                            url : "https://ih1.redbubble.net/image.5714806422.9965/tb,1000x1000,medium-pad,750x1000,f8f8f8.webp"
                        }
                    }
                ]
            }
        ],
        model: "gpt-4o"
    })
    console.log(completion.choices[0].message.content)
}
//getImage()

//For multiImage
async function getMultiImage(){
    const completion = await openai.chat.completions.create({
        messages :[{
            role : "user",
            content : [
                { type : "text", text : "What is the difference between the two images?"},
                { type : "image_url", image_url: {
                    url : "https://ih1.redbubble.net/image.5714806422.9965/tb,1000x1000,medium-pad,750x1000,f8f8f8.webp"
                    }
                },
                { type : "image_url", image_url: {
                        url : "https://ih1.redbubble.net/image.5656542389.8887/ssrco,mhoodie,mens,d60618:63655aa038,front,square_product,x600-bg,f8f8f8.1.jpg"
                    }
                }
            ]
        }],
        model: "gpt-4o"
    })
    console.log(completion.choices[0].message.content)
}
//getMultiImage()