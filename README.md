# **Tempcover Interview Project**

## **Table of Contents**

1. [Introduction](#introduction)
2. [Getting started](#getting-started)
3. [Running the application](#running-the-application)

## **Introduction**

Welcome to the Tempcover technical interview project. We have 3 directories for you to be aware of:

### **Tempcover.Client**

This is a React app built using Vite.

### **Tempcover.API**

This is a .Net 8 Web API

### **Tempcover.API.Tests**

This is a .Net 8 Test project

## **Getting Started**

- Fork this repository locally, which will be shared as part of the interview.
- Ensure you have [Node](https://nodejs.org/en/) and [.Net 8](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) setup.
- Run the following to setup your client application

```
cd Tempcover.Client && npm install
```

## **Running the application**

### **Client**

```
cd Tempcover.Client && npm run dev
```

### **API**

<details>
<summary>Visual Studio</summary>

Run as you would a standard application

</details>

<details>
<summary>Visual Studio Code</summary>

```
cd Tempcover.API && dotnet run
```

</details>

### **DOUBLE CHECK YOUR API PORT MATCHES THE API URL IN Tempcover.Client/src/App.tsx**
