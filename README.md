# HabitApp
Naslov projekta: Habit app

Avtorja:
- Vane Skubic: 63210300
- Matej Rupnik: 63210289

Kratek opis delovanja:
Aplikacija deluje kot socialno omrežje, kjer uporabniki objavljajo svoje navade in slike, kako te navade opravljajo. Uporabnik si ustvari račun nato pa v aplikaciji izbere katere navade želi spremljati. Na časovnico se mu prikazujejo objave navad, ki jih uporabnik spremlja. Uporabnik lahko naredi tudi novo objavo, v katero napiše opis, označi za katero navado gre in zraven doda tudi sliko. 

Aplikacija podpira tudi administratorske račune. Uporabnik, ki ima dodeljen status administratorja, lahko posamezne objave briše.

Opis nalog:
Matej Rupnik je naredil podatkovno bazo in API ter dokumentacijo zanj, Vane Skubic pa frontend za spletno in mobilno aplikacijo.

Opis in slika podatkovnega modela:
Podatkovna baza je sestavljena iz 9 tabel. 
'users' - hrani uporabnike aplikacije.
'posts' - hrani vse objave
'media' - hrani vse slike v aplikaciji - profilne slike ali slike objav
'habits' - hrani vse navade
'personal_access_tokens' - hrani vse tokene trenutno prijavljenih uporabnikov 
'habit_user' - hrani navado, ki jo sledi točno določen uporabnik
'migrations', 'password_resets' in 'failed_jobs' - tabele, ki jih je samodejno ustvaril Laravel ob vzpostavitvi projekta.

![enter image description here](https://github.com/VaneSkubic/habit-app-mobile/blob/master/podatkovni_model.png?raw=true)

