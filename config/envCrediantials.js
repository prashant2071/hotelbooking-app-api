module.exports.DB ={
    NAME:process.env.DB_NAME,
    HOST:process.env.DB_HOST,
    PORT:process.env.DB_PORT,
    TYPE:process.env.DB_TYPE
}
module.exports.MONGOCLOUD_DB ={
    CLOUD_URL:process.env.CLOUDMONGO_DB

}
module.exports.SERVERPORT={
    PORT:process.env.PORT
}
module.exports.WHICH_DATABASE={
    WHICH_DATABASE:process.env.WHICH_DATABASE
}
module.exports.SECRET_KEY={
    KEY:process.env.SECRET_KEY
}