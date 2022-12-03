#include <fstream>
#include <iostream>
#include <vector>

int getPoints(std::vector<std::string> lines) {
  for (char c : lines[0]) {
    if (lines[1].find(c) != lines[1].npos 
      && lines[2].find(c) != lines[2].npos) {
      return c - (islower(c) ? 96 : 38);
    }
  }
  return 0;
}

int main()
{
  std::fstream file;
  file.open("data.txt");
  std::string line;
  int totPoints = 0;
  std::vector<std::string> oneGroupsLines;
  while (getline(file, line)) {
    oneGroupsLines.push_back(line);
    if (oneGroupsLines.size() == 3) {
      totPoints += getPoints(oneGroupsLines);
      oneGroupsLines.clear();
    }
  }
  std::cout << totPoints << std::endl;
  file.close();
}