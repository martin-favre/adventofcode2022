#include <fstream>
#include <iostream>

int getPoints(std::string line) {
    std::string firstCompartment = line.substr(0, line.length()/2);
    std::string secondCompartment = line.substr(line.length()/2, line.length());
    
    for(char c : firstCompartment) {
      if(secondCompartment.find(c) != secondCompartment.npos) {
        return c - (islower(c) ? 96 : 38);
      }
    }
    return 0;
}

int main() {
  std::fstream file;
  file.open("data.txt");
  std::string line;
  int totPoints = 0;
  while (getline(file, line)) {
    totPoints += getPoints(line);
  }
  std::cout << totPoints << std::endl;
  file.close();
}