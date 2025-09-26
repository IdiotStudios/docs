---
sidebar_position: 1
id: about
sidebar_label: About
description: About The IdiotStudios API
---

# About the IdiotStudios API

The **IdiotStudios API** is the official backend service powering IdiotStudios projects and tools. It provides access to various resources, such as projects, and more.

This documentation is designed for developers who want to integrate IdiotStudios services into their own applications or explore how the API works.

## Base URL

All requests are made relative to:

``` html
https://idiotstudios.co.za/api
```

## Authentication

Currently, most public endpoints do **not** require authentication. However, some endpoints do and are  either private and unavailable in the public API or require an API for telling user requests apart.

## Response Format

* Responses are always in **JSON** format.
* Standard fields include:

  * `message`: Human-readable message.
  * `error`: Error details (if any).
  * `data`: Main payload of the request.

Example response:

```json
{
  "message": "Success",
  "data": ["example-item"]
}
```

## Error Handling

The API uses conventional HTTP response codes:

* **200 OK** – Request successful
* **400 Bad Request** – Missing or invalid parameters
* **404 Not Found** – Resource not found
* **500 Internal Server Error** – Something went wrong on our side

## Rate Limiting

The public API is subject to basic rate limits to ensure stability. If you exceed the limit, you may receive `429 Too Many Requests`.

## Available Endpoints

This documentation is split into multiple sections:

* [Root](./root) – General base endpoint
* [Projects](./projects) – Access to IdiotStudios project listings

---

## ⚡ Start exploring the IdiotStudios API using the navigation on the left!