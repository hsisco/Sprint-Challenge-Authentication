What is the purpose of using _sessions_?

  Sessions save a user's authentication to give them access for longer periods of time, rather than having to resubmit their credentials for every request.

What does bcrypt do to help us store passwords in a secure manner.

  By hashing a user's password, it makes it less likely their security and data will be compromised due to the algorithm and the unknown times it is run.

What does bcrypt do to slow down attackers?

  The hash function uses an algorithm to change the password string into a different, more complicated string. This string can be reverse engineered, but only if the attacker knows the number of times the string is run through the algorithm, which can be a very large number.

What are the three parts of the JSON Web Token?

  A header, a payload and a signature.