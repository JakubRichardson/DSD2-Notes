# Sequential Logic and Memory

## The D-Latch and D-Flip Flop

### Circuit-level feedback

#### Feedback over odd number of invertor:
Taking an invertor and connecting it with feedback gives unstable behavior. This may be used as a basis of an analogue oscillator. Not particularly useful for time-controlled logic digital systems.

<p align="center">
    <img src="../Images/Flip-Flop/FeedbackOdd.png" alt="Feedback over one invertor" width="250"/>
</p>

#### Feedback over even number of invertors
Signal feedback around an even number of two or more invertors is stable, and may adopt one of two stable conditions. This is useful for logic systems if the stable condition can be set by other combinational circuit signals.

<p align="center">
    <img src="../Images/Flip-Flop/FeedbackEven.png" alt="Feedback over one invertor" width="200"/>
</p>

### D-Latch (Positive Transparent Latch)
Considering the stable feedback loop with two invertors, as above. If we add switches to the input $S_{in}$ and feedback paths $S_{fb}$, then the stable condition can be externally controlled:

<p align="center">
    <img src="../Images/Flip-Flop/DataIn.png" alt="Data input controlling stable state of latch" width="350"/>
</p>

With $S_{in}$ closed and $S_{fb}$ open the circuit copies the input $D$ to the stable state of the latch.

<p align="center">
    <img src="../Images/Flip-Flop/Data-Latch.png" alt="Memorized stable state of latch" width="350"/>
</p>

With $S_{in}$ open and $S_{fb}$ closed the circuit remembers the state it was in. This isolated the data input $D$ and allows the output to be visible at output $Q$.

The switches used for the latch are [Transmission Gates](https://github.com/JakubRichardson/DSD2-Notes/blob/master/Notes/Combinational.md#transmission-gate---bi-lateral-cmos-switch). Clearly we wish the switched $S_{in}$ and $S_{fb}$ to be opposite to each other. This circuit is called the D-Latch, with corresponding circuit symbol:

<p align="center">
    <img src="../Images/Flip-Flop/D-latch.png" alt="D-Latch with corresponding circuit symbol" width="400"/>
</p>

When $G$ is high D/Q path is transparent. When G falls from high to low the output Q is frozen/memorized. Assuming the positive logic convention (low = 0, high = 1), the D-Latch operation table is:

| $G$ | $D$ | $Q_{i+1}$ | State |
|-----|-----|-----|-------|
| 1 | $D$ | $D$ | Transparent |
| $\downarrow$ | $D$ | $D$ | Input Captured |
| 0 | * | $Q_{i}$ | Output value held |

The D-Latch transparent condition means data could be missed as the data capture window depends on the control signal $G$. This window can be minimized by using two D-latches in series, this is called a [D-Flip-Flop](#d-flip-flop)

### D-Flip-Flop

TODO: Complete


## Memory

## Shift Registers