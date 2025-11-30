---
sidebar_position: 1
id: about
sidebar_label: About
description: About The IdiotStudios Auth API
---

# About the IdiotStudios Auth API

This API is our auth endpoint, it allows you to login to idiotstudios via our services...
eg: (signup)

``` bash
curl -X POST https://api.idiotstudios.co.za/auth/signup -H "Content-Type: application/json" -d '{"username":"Bob", "password":"1234", "email": "bob@gmail.com"}'
```

eg: (login)

``` bash
curl -X POST https://api.idiotstudios.co.za/auth/login -H "Content-Type: application/json" -d '{"username":"Bob", "password":"1234", "email": "bob@gmail.com"}'
```

Note that these may or may not work depending on the state of our current Auth System, we are actively working on it to make sure it can run without error.
