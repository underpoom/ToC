## About

Backend API for the assignment of my Theory of Computation classes.

## API Endpoints

### GET /all_temples
Arguments: ***None***

Returns:
- *200 OK*: List of all temples in all supported provinces

### GET /province_temple/{ProvinceName}
Arguments:
- ProvinceName: *String*

Returns:
- *200 OK*: List of all temples in the specificed province
- *400 Bad Request*: The specificed province is not supported

Example:
```
/province_temple/trang
```

### Docker

build docker image using "docker build -t backend ."
