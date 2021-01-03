{
    "AWSEBDockerrunVersion": 2,
    "containerDefinitions": [
        {
            "name": "client",
            "image": "frostvlad/docker-fib-app-client",
            "hostname": "client",
            "essential": false
        },
        {
            "name": "server",
            "image": "frostvlad/docker-fib-app-server",
            "hostname": "api",
            "essential": false
        },
        {
            "name": "worker",
            "image": "frostvlad/docker-fib-app-worker",
            "hostname": "worker",
            "essential": false
        },
        {
            "name": "nginx",
            "image": "frostvlad/docker-fib-app-nginx",
            "hostname": "nginx",
            "essential": true,
            "portMappings": [
                {
                    "hostPort": 80,
                    "containerPort": 80
                }
            ],
            "links": ["client", "server"]
        }
    ]
}