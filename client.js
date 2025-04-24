import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const packageDefinition = protoLoader.loadSync("protos/greeter.proto");

const grpcObj = grpc.loadPackageDefinition(packageDefinition);

const greeterPackage = grpcObj.greeter;

const client = new greeterPackage.Greeter(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.sayHello({ message: "Sunil" }, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Greeting:", response.message);
  }
});
