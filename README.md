# Tim-3 Bingo game

Hello there! This is bingo game that is made by SPARK Team 3. We hope you like it :)

## How it works?
```
Typical Bingo game made technically out of four components, but actually five : 
- Home page  
- Generisanje / Generisanje0 (print mode)
- Izvlacenje 
- Rezultati


Project was made using VUE,VUE ROUTER and VUEX.
```

### Home page

Home page is basically page where you start the game. It's really plain page with logo at the center and button that starts the game underneath it. At the top right corner user has option to turn on or off print mode that will print tickets.


### Generisanje page

Generisanje page is actually first page of 'the game', here we draw our tickets while timer is ticking down from 60 seconds to 0, after timer is over and time is out out page will reload if no tickets were drawn, or procede to next page 'Izvlacenje' if there is even one ticket drawn.


### Izvlacenje page

Page where we get drawn 6 balls - winner combination out of bingo drum.

### Rezultati page

All tickets with 1 or more hits are shown to the players. Tickets are sorted by number of hits per ticket.


