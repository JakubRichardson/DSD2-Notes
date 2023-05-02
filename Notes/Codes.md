# Binary Codes

## Sparse vs Dense

## Non-Number Codes

### "Food Cooker" Code

Food Cooker Code contains exactly one true bit where the significance of the codeword is detailed by the bit position. An example of this code can be seen below:

| $b_5$ | $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ |
|---|---|---|---|---|---|
| 1 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 0 | 1 |

This is an example of "one-hot" code meaning there is always exactly one true bit. It is also worth noting this code is sparse as $n$ codewords are utilised given the $2^n$ available codewords.

### Thermometer Code

The codewords in Thermometer code have natural order of  significance with the value of each codeword being detailed by the number of bits present in each codeword:

| $b_5$ | $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ |
|---|---|---|---|---|---|
| 1 | 1 | 1 | 1 | 1 | 1 |
| 0 | 1 | 1 | 1 | 1 | 1 |
| 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 0 | 0 | 0 |

Similar to Food Cooker code this code is clearly sparse with $n + 1$ utilised codewords. This code is an example of Hamming distance code (unit distance), as each adjacent codeword differs by the same number of bits (one).

### Gray Code

Gray code is another Hamming code with circular continuity of codewords. An example of a 3 bit Gray code can be seen below:

| $b_2$ | $b_1$ | $b_0$ |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 0 | 1 | 0 |
|---|---|---|
| 1 | 1 | 0 |
| 1 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 0 | 0 |

The reflective structure of Gray code makes systematically extending the length of the code possible. The code is dense as it uses every possible codeword

### ASCII

ASCII is a dense 7-bit code designed to communicate graphical symbols. The first 2 or 3 bits signifies the type of symbol, while the remaining bits contain the value. Important identifiers to remember:

| 2 or 3 bit ID | Symbol Type |
|---------------|-------------|
|10*****| Uppercase character|
|11*****| Lowercase character|
|011****| Numeric Symbol (1-9)|
|00*****| Non-Graphic Symbol|

The value of alphabetical symbols starts at 00001 and follows the standard alphabetical order. It is also worth noting that 0000000, 1111111 both mean "no symbol".

## Number Codes - Integers

### Binary Natural Number (BNN)

Binary Natural Number (BNN) Code is the simplest Binary Code making use of Place-Value Exponential-Weight Code meaning successive bits have exponentially increasing numeric significance. BNN in comparison to other common notations:

| BNN | Hexadecimal | Octal | Decimal | 
|-----|-------------|-------|---------|
| 0000 | 0 | 00 | 0 |
| 0001 | 1 | 01 | 1 |
| 0010 | 2 | 02 | 2 |
| 0011 | 3 | 03 | 3 |
| 0100 | 4 | 04 | 4 |
| 0111 | 7 | 07 | 7 |
| 1000 | 8 | 10 | 8 |
| 1100 | C | 14 | 12 |
| 1111 | F | 17 | 15 |

BNN has a range of 0 to $2^n - 1$ for $n$ bits. The resolution 

### Signed Magnitude (SM)

Signed Magnitude operates under the same principles as BNN with an added sign bit in the leftmost position:

| Sign | $2^3$ | $2^2$ | $2^1$ | $2^0$ | Decimal | 
|------|-------|-------|-------|-------|---------|
| 1 | 1 | 0 | 1 | 0 | -10 | 
| 0 | 1 | 0 | 1 | 0 | 10 | 

### One's Complement 

### Two's Complement

## Offset/Excess BNN

## Binary Coded Decimal

## Fixed-Point Number

## IEEE 754-1985


