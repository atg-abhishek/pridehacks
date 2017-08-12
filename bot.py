import json
from watson_developer_cloud import ConversationV1 as Cv
from pprint import pprint

conversation = Cv(
  username="d430f35d-4d65-4fa0-aecf-e6aa784d0e4b",
  password="IjCaKBuzSZfL",
  version='2017-05-26'
)

def generate_reponse(input):
    input = input
    workspace_id = '61d5aa77-f337-4f32-b4b0-240a474fef13'
    context = {}
    # message_input = {}
    # message_input['text'] = input
    response = conversation.message(
      workspace_id=workspace_id,
      message_input={'text': input},
      context=context)

    return response["output"]["text"][0]

print generate_reponse('hi')