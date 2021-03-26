export default function aboutRoute(req,res) {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({
        data:[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus, dicta dolor eligendi inventore ipsum magnam magni minima minus nemo nihil officia pariatur, quaerat tempora ullam, vitae voluptate voluptates.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aperiam consectetur cupiditate deleniti dolorem enim, ex facilis impedit in ipsam mollitia necessitatibus perspiciatis provident quaerat quam quas quasi quia quibusdam quisquam quo similique sint tempora tempore, vel voluptate voluptates.',
        ]
    }))
}