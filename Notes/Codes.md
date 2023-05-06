# Binary Codes

## Sparse vs Dense

If a code makes use of less than or equal to half of its available codewords its said to be sparse, otherwise the code is  dense. Binary codes have $2^N$ available codewords for $N$ bits so, in this case, codes that have $ \le 2^{N - 1}$ codewords would be deemed sparse.

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

The reflective structure of Gray code makes systematically extending the length of the code possible. The code is dense as it uses every possible codeword.

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

> Resolution is the minimum distance between adjacent values represented by the respective code. Uniform resolution means resolution is constant for all values represented by the code. If a code has unity resolution the resolution is always 1 such as in most integer binary codes.

> MSB and LSB are used to describe the most significant bit (leftmost) and least significant bit (rightmost).

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

BNN has a range of 0 to $2^N - 1$ for $N$ bits. The resolution is uniform and unity. BNN is significant as it is used in many other, more complex, number codes.

### Signed Magnitude (SM)

Signed Magnitude operates under the same principles as BNN with an added sign bit in the leftmost position:

| $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ | Decimal | 
|------|-------|-------|-------|--------|---------|
| Sign | $2^3$ | $2^2$ | $2^1$ | $2^0$ |  | 
| 1 | 1 | 0 | 1 | 0 | -10 | 
| 0 | 1 | 0 | 1 | 0 | 10 | 

THe Sign bit denotes a negative integer when 1, and subsequently positive when 0. Similar to BNN the resolution is uniform and unity. SM is zero balanced making the range: $-(2^{N-1} - 1)$ to $+(2^{N-1} - 1)$, 1 less than BNN. The loss of one value in the range is due to two codewords representing 0: 1000 and 0000.

### One's Complement 

One's Complement (1'sC) represents negative numbers by inverting all the bits in the codeword:

| $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ | Decimal |
|------|-------|-------|-------|-------|---------|
| Sign | $2^3$ | $2^2$ | $2^1$ | $2^0$ |  | 
| 1 | 0 | 1 | 0 | 1 | -10 | 
| 0 | 1 | 0 | 1 | 0 | 10 | 

Similar to SM 1'sC has range: $-(2^{N-1} - 1)$ to $+(2^{N-1} - 1)$ and a uniform and unity resolution, with 1111 and 0000 able to represent 0. Although 1'sC is similar in functionality to SM, it has the advantage of making arithmetic calculations possible without the need for any transformation:

|| 1'sC | Decimal |
|---|-----------|----|
|| 0001 0011 | 19 |
| - | 1111 1100 | -3 |
|---|-----------|----|
| 1 | 0001 0111 | 23 |
| - | 0000 0001 | 1 |  
|---|-----------|----|
|| 0001 0110 | 22 |

An additional operation was required due to an end-around borrow being produced in the first operation.

> N. B. To change the sign of a 1'sC codeword invert all the bits

### Two's Complement

Two's Complement (2'sC) represents negative numbers by treating the MSB as a negative value:

| $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ | Decimal |
|------|-------|-------|-------|-------|---------|
| $-2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |  | 
| 1 | 0 | 1 | 1 | 0 | -10 | 
| 0 | 1 | 0 | 1 | 0 | 10 | 

Two's Complement isn't zero balanced (0 only specified by 0000) making the range larger than SM and 1'sC by 1: $-(2^{N-1})$ to $+(2^{N-1} - 1)$. Although the resolution is uniform and unity the Hamming distance is large for codewords around 0 implying a higher switching energy in comparison to SM code. Arithmetic can performed with the same process used for BNN:

|| 2'sC | Decimal |
|---|-----------|----|
|| 0001 0011 | 19 |
| + | 1111 1101 | -3 |
|---|-----------|----|
| 1 | 0001 0000 | 16 |

> N. B. To change the sign of a 2'sC codeword invert all the bits and add 1

### Offset/Excess BNN

Offset or BNN Number Codes represent negative numbers by adding a positive bias to the desired value and encoding the biased value in BNN. See examples with a bias of +12:

| Binary | Value in BNN | Value in xS-12 | 
|--------|--------------|----------------|
| 0010 | 2 | -10 |
| 1000 | 8 | -4 |
| 1110 | 14 | 2 |

Similar to other integer binary codes the resolution is uniform and unity. Excess BNN's range can be adapted by the bias value making it useful for applications where the number of positive and negative integers required are not equal: $-\textrm{bias}$ to $2^N - 1 - \textrm{bias}$

### Binary Coded Decimal

Binary Coded Decimal is the most natural way to represent a number in binary format by representing each digit as a 4 bit binary codeword. There are many standards for representing decimal digits but the one explored in this course is BCD 8421 where each codeword has a weighting of 8 4 2 1 (just like BNN). A few examples of such an implementation:

| BCD | Decimal | Binary |
|-----|---------|--------|
|0011 0010 1001| 329 | 101001001 |
|0000 0000 1001| 9 | 1001 |
|0000 0111 1000| 78 | 1001110 |

BCD can be sign encoded as well as extended to make us of fixed-point structure to represent exact decimal representation (0.1,0.2,...)

## Number Codes - Real Numbers

### Fixed-Point Number

Fixed-Point Number Codes use the same principles as BNN with the addition of a predetermined fraction point which splits the bits representing integers and the bits representing fractional values (between $2^0$ and $2^{-1}$):

| $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ | Decimal |
|------|-------|-------|-------|-------|---------|
| $2^2$ | $2^1$ | $2^0$ | $2^{-1}$ | $2^{-2}$ |  | 
| 1 | 0 | 1 | 1 | 0 | 5.5 | 
| 0 | 1 | 0 | 1 | 1 | 2.75 | 
| 1 | 1 | 1 | 1 | 1 | 7.75 | 

Given $F$ as the number of fractional bits the range is $0$ to $2^{N - F} - 2^{-F}$. The resolution is uniform and $2^{-F}$. It is also worth noting that it is impossible to represent many simple decimal fractional values such as 0.1,0.2,...,0.8,0.9 with the exception of 0.5.

### IEEE 754-1985

The IEEE 754-1985 is an industry standard for representing floating-point numbers. The 32-bit codeword is made up of 3 similar codes that have already been explored. The code word is split up into 1:8:23 bits in the format sign:exponent:significand. The sign is 0 (+ve) or 1 (-ve) as in SM code. The exponent is an 8 bit offset BNN code with bias +127. Exponent codewords: 00000000 and 11111111 are used to represent values that would be impossible to represent otherwise such as 0, NaN and infinity. The significand is a Fixed-point BNN code with 23 fractional bits with an offset of -1 (i.e. every significand value is of the form 1.xxx...). Given the exponent is $E$ the final value is calculated as follows:

$$\textrm{float value} = (-1)^{sign} \cdot 2^E \cdot \textrm{value of Significand}$$

Resolution varies but can be calculated for any given value using $2^{E-23}$. The range of this code is from $\pm 2^{-126}$ to $\pm (2^{127} \cdot (2 - 2^{-23}))$. An example calculation can be seen below:

Calculating the IEEE value of 0xE90F0002:

First, convert the hexadecimal into its 32 bit binary equivalent: 

$$E90F0002 \Rightarrow 11101001000011110000000000000010$$

Splitting the binary codeword into its 3 codewords gives:

$$\textrm{Sign} : \textrm{Exponent} : \textrm{Significand} \Rightarrow 1:11010010:00011110000000000000010$$

From this the values for each component can be calculated

$$\textrm{Sign} = 1 \Rightarrow -ve$$

$$\textrm{Exponent} = 11010010 \Rightarrow E = 210 - 127 = 83$$

$$\textrm{Significand} = 00011110000000000000010$$ 

$$\Rightarrow 1 + 2^{-4} + 2^{-5}+  2^{-6}  + 2^{-7} + 2^{-22} = 1.1171877...$$

Finally, the float value can be calculated:

$$\textrm{float value} = (-1)^{1} \cdot 2^{83} \cdot 1.1171877 = -1.08047768 \cdot 10^{25}$$

> Double check solutions by running the following converter: [IEEE 754-1985 Calculator](../IEEE_754/)

