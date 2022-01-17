import unittest
import json

from index import handler

class TestLambaFunction(unittest.TestCase):

	def test_event(self):

		with open('event.json') as f:
			event = json.load(f)
		
		handler(event, None)

if __name__ == '__main__':
    unittest.main()