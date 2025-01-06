# JavaScript Null Value Handling Bug

This repository demonstrates a potential bug in JavaScript related to handling null values in a function.

## Bug Description

The `foo` function adds two numbers.  However, it returns 0 if either input is null. While this might be intentional in some cases, it could lead to unexpected behavior if the intention was to handle nulls differently or throw an error.  The current implementation silently returns 0, masking potential errors.

## Solution

The suggested solution demonstrates several approaches for more robust null handling:

1. **Throwing an Error**: This explicitly signals an error when null values are encountered. 
2. **Using a Default Value**: This replaces null inputs with a default value (e.g., 0) before performing the addition.
3. **Using Optional Chaining**: This provides a concise way to handle potential null values.

Choose the solution that best suits the specific requirements of your application.