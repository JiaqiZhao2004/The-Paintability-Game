class PaintGraph:

  #NOTE: Many methods run on the assumptions that nonnegative integers were inputted
  def __init__(self, vtxList, adjMat):
    self.vtxList = vtxList #array for storing the health of each vertex
    self.adjMat = adjMat #the adjacency matrix of the graph
    self.vtxSafe = [] #array for storing whether each vertex is safe or not
    for i in range(len(vtxList)):
      vtxSafe.append(False)
    self.gameOver = False
    self.winner = ""
    self.vtxAttack = [] #array that stores the vertices being attacked
    for i in range(len(vtxList)):
      vtxAttack.append(False)

  def isEdge(self, i, j): #returns whether i and j are connected
    edge = False
    if(i < len(self.adjMat) and i < len(self.vtxList)):
      if(j < len(self.adjMat[i]) and j < len(self.vtxList)):
        if(self.adjMat[i][j] > 1):
          edge = True
    return edge

  def attack(self, atkArr): #takes an array with the vertices being attacked and flags them as being attacked, atkArr lists all the vertices you wish to attack
    for i in atkArr:
      if(i < len(self.vtxList) and self.vtxSafe[i] == False):
        self.vtxAttack[i] = True


  def defend(self, defArr): #defends the attacked vertices, defArr lists all the vertices you wish to defend
    isValid = True
    for i in defArr:
      for j in defArr:
        if(self.isEdge(i,j)):
          isValid = False
    if(isValid == False):
      return False #if an independent was not entered, will flag that an invalid input was entered and not proceed
    else:
      for i in defArr:
        if (i < len(self.vtxList) and self.vtxAttack[i]): #ensures that a successfully defended vertex cannot be attacked again
          vtxSafe[i] = True
          self.vtxAttack[i] = False
      for i in range(len(self.vtxAttack)): #subtracts health from un-defended vertices, resets the vertices being attacked
        if(self.vtxAttack[i]):
          self.vtxList[i] = self.vtxList[i] - 1 #subtracts 1 health
          self.vtxAttack = False #resets the attacked vertex
    return True

  def checkForWinner(self): #checks if the game has ended, and if so, updates the winner, and returns true. Otherwise returns false. 
    for i in self.vtxList:
      if(i < 1): #the attacker wins if any vertex has been reduced to zero health
        self.winner = "Attacker"
        self.gameOver = True
        return True
    for i in self.vtxSafe:
      if(i == False):
        return False
    self.winner = "Defender" #the defender wins if all vertices are safe
    self.gameOver = True
    return True