
def parseStacks(stackslines):
    width = int(stackslines[-1][-3])
    stackslines = stackslines[:-1]
    stacks = [[] for x in range(width)]
    for line in stackslines:
        for i in range(width):
            value = line[i*4+1]
            if(value != ' '):
                stacks[i].insert(0, value)
    return stacks


with open("data.txt") as file:
    stackslines = []
    commandsLines = []
    readingStack = True
    for line in file.readlines():
        if line == '\n':
            readingStack = False
            continue
        if readingStack:
            stackslines.append(line)
        else:
            commandsLines.append(line)
    stacks = parseStacks(stackslines)
    for line in commandsLines:
        [_, moveCount, _, src, _, dst] = line.split(' ')
        src = int(src) -1
        moveCount = int(moveCount)
        dst = int(dst) -1
        items = [stacks[src].pop() for x in range(moveCount)]
        stacks[dst] += items
[print(x[-1]) for x in stacks]