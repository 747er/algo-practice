# https://stackoverflow.com/questions/66865159/what-would-be-the-best-approach-to-solve-this-using-oop

class Editor():
    def __init__(self, text):
        self.text = text
        self.pos = 0

    def f(self, step):
        self.pos += int(step)

    def b(self, step):
        self.pos -= int(step)

    def r(self, char):
        s = list(self.text)
        s[self.pos] = char
        self.text = ''.join(s)
        # could've just stored the list of chars (instead of string)
        # from the beginning, but that's rather a secondary issue.

    def run(self, command):
        command = list(command)
        while command:
            method = getattr(self, command.pop(0).lower())
            arg = command.pop(0)
            method(arg)

    def __str__(self):
        return self.text

text = 'abcdefghijklmn'
command = 'F2B1F5Rw'

ed = Editor(text)
ed.run(command)

print(ed)