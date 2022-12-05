class Range:
    def __init__(self, min, max) -> None:
        self.min = min
        self.max = max
    def contains(self, otherRange):
        return self.min <= otherRange.min and self.max >= otherRange.max
overlappingRanges = 0
with open('day4/data.txt') as file:
    for line in file:
        [min, max] = line.split(',')[0].split('-')
        r1 = Range(int(min), int(max))
        [min, max] = line.split(',')[1].split('-')
        r2 = Range(int(min), int(max))
        overlappingRanges += 1 if r1.contains(r2) or r2.contains(r1) else 0
print(overlappingRanges)
