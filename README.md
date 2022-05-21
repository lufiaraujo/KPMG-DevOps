# KPMG-DevOps challenges

We would expect no more than 30 minutes per challenge, if at the end of the time you haven’t completed don’t worry just send us what you have. (Upload to a GIT repository and send back to me.)

## Challenge #1

A 3 tier environment is a common setup. Use a tool of your choosing/familiarity create these resources. Please remember we will not be judged on the outcome but more focusing on the approach, style and reproducibility.

> Created a simple 3-tier Todo list app using MongoDB, and NodeJS (Express). To run the app simply download the docker-compose.yaml file and run the following command whilst in the same directoty (assuming docker is installed): "docker-compose -d up". Docker images were uploaded to the docker hub for easy distribution.

## Challenge #2

We need to write code that will query the meta data of an instance within aws and provide a json formatted output. The choice of language and implementation is up to you.

Bonus Points
The code allows for a particular data key to be retrieved individually

Hints
·       Aws Documentation: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html
·       Azure Documentation: https://docs.microsoft.com/en-us/azure/virtual-machines/windows/instance-metadata-service?tabs=windows
·       Google Documentation: https://cloud.google.com/compute/docs/metadata/overview

> Can be viewed as jupyter notebook directly in the Challenge 2 folder. Cannot run online because I used a local file for the ssh access to my AWS EC2 instance, however the outputs are stored showing the development. A key can be retrieved individually by using function getInstanceMetadata(key) and specifying the desired key, or all keys can be parsed by running walkKeyValue(keylist). The functions can be easily adapted to further requirements.

## Challenge #3

We have a nested object, we would like a function that you pass in the object and a key and get back the value. How this is implemented is up to you.

Example Inputs

object = {“a”:{“b”:{“c”:”d”}}}
key = a/b/c
value = d

object = {“x”:{“y”:{“z”:”a”}}}
key = x/y/z
value = a

Hints
We would like to see some tests. A quick read to help you along the way: https://hexdocs.pm/elixir/master/Kernel.html#get_in/2
We would expect it in any other language apart from elixir.

> Can be viewed as jupyter notebook directly in the Challenge 3 folder and tested online.
