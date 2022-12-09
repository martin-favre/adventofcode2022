def getMarkerLocation(data):
    for i in range(len(data)):
        subset = data[i:i+14]
        isMarker = all([subset.count(char) == 1 for char in subset])
        if isMarker:
            return i+14

print(str(getMarkerLocation(open("data.txt").read())))