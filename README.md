# Vogels update problem

Demonstrates a bug in [vogels](https://github.com/ryanfitz/vogels ) update method.

1. Get DynamoDB local
http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html#DynamoDBLocal.Maven

2. Start dynamo and run the script
```
DYNAMOLIB=/path/to/dynamolib java -Djava.library.path=${DYNAMOLIB}/DynamoDBLocal_lib -jar ${DYNAMOLIB}/DynamoDBLocal.jar -inMemory"

npm start
```
