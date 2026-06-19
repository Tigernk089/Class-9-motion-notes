/* =====================================================================
   MOTION LAB — script.js
   All data + all interactivity for the Class 9 Motion study console.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. TOPIC NOTES  (32 topics — S.Chand Ch.1 "Motion" + NCERT Ch.4
      "Describing Motion Around Us". Every required angle is folded into
      def / exp / ex / formula / tip / mistake / trick / note.)
   --------------------------------------------------------------------- */
const TOPICS = [
{id:1, ch:"1", title:"Motion — The Basic Idea",
 def:"Motion is the change in the position of an object with respect to a fixed reference point as time passes.",
 exp:"Nothing in the universe is truly still — planets, electrons, vehicles, even your chair (it spins with the Earth) are all in some kind of motion. We only notice motion when an object's position changes relative to something we have chosen to treat as fixed.",
 ex:"A train leaving a station, a cricket ball flying off the bat, a leaf falling from a tree — all are everyday motion.",
 formula:"No formula — this is a qualitative, definition-based topic.",
 tip:"Always add the line 'motion is relative' — an object can be at rest for one observer and in motion for another, depending on the reference point chosen.",
 mistake:"Thinking rest means absolute stillness. In reality both rest and motion depend on the reference point picked.",
 trick:"No reference, no motion — you cannot even describe motion without first fixing a reference point.",
 note:"CBSE loves asking 'is rest absolute?' — the correct answer is always No."},

{id:2, ch:"4", title:"Reference Point and Position",
 def:"A reference point (origin) is a fixed point chosen to describe an object's position; position is the distance AND direction of the object from this point.",
 exp:"NCERT's athlete example marks the start line as origin O, then describes locations using + (right of O) and − (left of O) together with a distance — e.g. point B is at +40 m.",
 ex:"'The library is 500 m east of the school gate' — the school gate is the reference point.",
 formula:"Position = distance + direction, measured from O.",
 tip:"In numericals, define your origin and your positive direction FIRST, and never change it mid-problem.",
 mistake:"Giving only a distance ('40 m') without direction — that is an incomplete description of position.",
 trick:"'O is home base' — once fixed, treat right/up as + and left/down as −, consistently.",
 note:"Position always needs two things: a number (magnitude) and a direction."},

{id:3, ch:"4", title:"Rest vs Motion (Both Are Relative)",
 def:"An object is at rest if its position relative to the reference point does not change with time; it is in motion if that position does change with time.",
 exp:"Both terms are relative. An object at rest for one observer can be in motion for another, simply because they have chosen different reference points.",
 ex:"A sleeping passenger is at rest relative to the train, but in motion relative to a tree outside the window.",
 formula:"No formula — conceptual topic.",
 tip:"A favourite 1-mark question: 'Discuss whether an object on Earth is at rest' — Earth orbits the Sun, so the object is at rest relative to Earth's surface but in motion relative to the Sun.",
 mistake:"Believing some objects sit in 'absolute rest'. Nothing does — not even the ground you stand on.",
 trick:"Rest = no change, Motion = change — both measured against the SAME chosen reference point.",
 note:"This is exactly NCERT's Revise-Reflect-Refine Q11 — a guaranteed exam favourite."},

{id:4, ch:"1", title:"Types of Motion (Linear, Circular, Rotatory, Oscillatory)",
 def:"Based on the shape of the path, motion is classified as linear (straight line), circular (along a circle), rotatory (spinning about an internal axis), and oscillatory/vibratory (to-and-fro about a mean position).",
 exp:"NCERT introduces linear and circular motion as the idealised, simplified forms scientists use to study the bewildering variety of real motion in nature — butterflies, snakes, tides, clouds.",
 ex:"Train on a track = linear; ceiling fan blade = rotatory; a swing = oscillatory; Earth around the Sun = (nearly) circular.",
 formula:"No formula — classification topic.",
 tip:"Be ready to classify everyday motions (climbing vine tendrils, a closing flytrap, ocean tides) into these four categories.",
 mistake:"Confusing rotatory motion (spinning about its own axis) with circular motion (moving along a circular path around an external point).",
 trick:"L-C-R-O: Linear, Circular, Rotatory, Oscillatory — the four idealised building blocks of real-world motion.",
 note:"Most real motion is a complicated mixture of these four basic, idealised types."},

{id:5, ch:"1", title:"Distance",
 def:"Distance is the total length of the actual path covered by an object during its motion, irrespective of direction.",
 exp:"Distance only tells you 'how much ground was covered' — never the direction. It is a scalar quantity and can never be negative, and is zero only if the object never moved at all.",
 ex:"NCERT's athlete runs O→A (100 m) then back to B (60 m); total distance travelled = 100 + 60 = 160 m.",
 formula:"distance = total path length actually travelled (SI unit: metre, m).",
 tip:"Distance is always ≥ the magnitude of displacement — state this comparison in any 2-mark answer.",
 mistake:"Adding distances with + and − signs as if they were vectors. Distance is always added arithmetically, never subtracted.",
 trick:"'Distance is the odometer reading' — like a car's odometer, it only ever increases, never decreases or goes negative.",
 note:"For one-directional straight-line motion, distance and the magnitude of displacement become equal (NCERT Note, p.51)."},

{id:6, ch:"4", title:"Displacement",
 def:"Displacement is the net change in position of an object between two instants — the straight-line distance from the initial to the final position, together with its direction.",
 exp:"It has both a magnitude (the straight-line distance, called its magnitude) and a direction (from the first position towards the second) — which makes it a vector quantity.",
 ex:"In the athlete example, total distance run O→A→B = 160 m, but the displacement (O to the final point B) is only 40 m in the positive direction.",
 formula:"displacement = final position − initial position (SI unit: metre, m).",
 tip:"Always state BOTH the value and the direction when asked for displacement (e.g. '40 m towards the positive direction', not just '40 m').",
 mistake:"Saying displacement is zero just because the object 'moved a lot'. Displacement is zero only when the final position exactly coincides with the initial position.",
 trick:"'Displacement = bird's-eye, straight line' — picture a bird flying directly from start to end, ignoring the winding path actually taken.",
 note:"Magnitude of displacement ≤ distance travelled, always. They are equal only for one-directional straight-line motion (NCERT Note, p.51)."},

{id:7, ch:"4", title:"Distance vs Displacement (Comparison)",
 def:"A comparative topic distinguishing the scalar path-length 'distance' from the vector net-change-in-position 'displacement'.",
 exp:"Distance is always positive and can only increase. Displacement can be positive, negative, or zero, and its magnitude never exceeds the corresponding distance.",
 ex:"NCERT's Activity 4.1: a ball thrown 40 cm straight up and falling back to the same point covers a distance of 80 cm (40 up + 40 down) but has a displacement of 0 cm.",
 formula:"|displacement| ≤ distance; equality holds only for one-directional straight-line motion.",
 tip:"This is a classic comparison-table question — list at least 4 differences: definition, symbol, scalar/vector nature, value relationship.",
 mistake:"Saying distance and displacement are 'always different' — they are equal whenever motion is one-directional and straight.",
 trick:"D for Distance = Dumb path (any shape, any reversal); D for Displacement = Direct path (straight line, start to finish).",
 note:"NCERT Activity 4.1 concludes that option (iii) is correct: the magnitude of displacement is always less than or equal to the total distance travelled."},

{id:8, ch:"4", title:"Scalar and Vector Quantities",
 def:"Scalars are physical quantities completely specified by a numerical value (magnitude) alone; vectors need both a magnitude and a direction.",
 exp:"Distance, speed, time and mass are scalars; displacement, velocity, acceleration and force are vectors, because direction genuinely matters for them.",
 ex:"'5 kg of mass' is a scalar (no direction needed); '5 m/s towards north' is a vector (direction is essential to its meaning).",
 formula:"Scalar = magnitude only. Vector = magnitude + direction.",
 tip:"Memorise two ready lists — Scalars: mass, distance, speed, time, work. Vectors: displacement, velocity, acceleration, force, momentum.",
 mistake:"Calling speed a vector just because it is 'related' to velocity. Speed has no direction, so it stays scalar.",
 trick:"V for Vector, V for 'pointing somewhere' — both ideas start with direction.",
 note:"NCERT introduces this formally in its 'Ready to Go Beyond' box (p.50) — the conceptual gateway to all of Class 11 mechanics."},

{id:9, ch:"1", title:"Uniform Motion",
 def:"An object is in uniform motion (along a straight line) if it covers equal distances in equal intervals of time, however small those intervals may be.",
 exp:"This means the speed stays exactly constant throughout the journey — there is no speeding up or slowing down anywhere.",
 ex:"A car cruising at a steady 60 km/h on cruise control on an empty highway.",
 formula:"distance ∝ time, i.e. speed = constant.",
 tip:"Always add the phrase 'for all possible choices of time intervals' in your definition — examiners look for this exact precision.",
 mistake:"Assuming equal TOTAL distances over two unequal time spans counts as uniform motion. Every possible interval must show the same distance-per-time.",
 trick:"Uniform = U-niform pace, like the steady tick of a metronome.",
 note:"On a position-time graph, uniform motion is always a straight inclined line (NCERT Fig 4.13a)."},

{id:10, ch:"1", title:"Non-Uniform Motion",
 def:"An object is in non-uniform motion if it covers unequal distances in equal intervals of time — its speed keeps changing.",
 exp:"The object may speed up, slow down, or alternate between both; this is overwhelmingly the most common type of real-world motion.",
 ex:"A car in city traffic, a bus halting at signals, a ball rolling down a bumpy hill.",
 formula:"speed varies with time (non-constant).",
 tip:"Mention that the position-time graph for non-uniform motion is always a curve, never a straight line.",
 mistake:"Assuming non-uniform always means 'speeding up'. It could equally mean slowing down, or alternating.",
 trick:"Non-uniform = No-uniform pace, like a runner who sprints then jogs then sprints again.",
 note:"If distances in successive equal time intervals keep increasing, the object's speed is increasing (NCERT p.52)."},

{id:11, ch:"1", title:"Speed",
 def:"Speed is the distance travelled by an object per unit time; it tells us how fast or slow the object moves, without telling us the direction.",
 exp:"Speed can be calculated at an instant or over an interval, and is always a positive (or zero) scalar quantity.",
 ex:"A cheetah covering 100 m in 4 s has a speed of 25 m/s at that moment.",
 formula:"speed = distance / time  (SI unit: m s⁻¹).",
 tip:"Always convert km/h to m/s using ×(5/18), and m/s to km/h using ×(18/5), before substituting into any formula.",
 mistake:"Forgetting unit conversion before substitution — the single most common silly mistake in this whole chapter.",
 trick:"'km/h to m/s: multiply by five-over-eighteen' — the resulting m/s number is always smaller, which is a useful sanity check.",
 note:"Speed can never be negative; zero speed simply means the object is at rest."},

{id:12, ch:"4", title:"Average Speed",
 def:"Average speed is the total distance travelled divided by the total time taken to cover that distance.",
 exp:"It smooths out every variation in speed during a journey into one single representative number for the whole trip.",
 ex:"NCERT Example 4.2 — Sarang swims 50 m in a pool and back, taking 50 s in total; his average speed works out to about 1 m/s for that interval.",
 formula:"average speed = total distance travelled / total time taken.",
 tip:"When a journey covers two EQUAL DISTANCES at two different speeds, use the harmonic-mean formula avg = 2v₁v₂/(v₁+v₂) — NOT a simple average.",
 mistake:"Arithmetically averaging two speeds [(v₁+v₂)/2] when the equal quantity is distance, not time. That formula is valid only when the TIME intervals are equal.",
 trick:"Average speed only ever cares about totals: total distance over total time — never an average of in-between speeds unless the times are equal.",
 note:"The ancient Indian Ganitakaumudi 'two postmen' problem (14th century CE, quoted in NCERT) is a classic combined-speed style question."},

{id:13, ch:"1", title:"Uniform (Constant) Speed",
 def:"Uniform or constant speed means the object covers equal distances in equal time intervals — the magnitude of its speed never changes during the motion.",
 exp:"This matches 'uniform motion' exactly when there is no reversal of direction, since distance and the magnitude of displacement then coincide.",
 ex:"A toy train going around a circular track at a fixed speed shown on its display.",
 formula:"speed = constant value k, for every instant t.",
 tip:"Distinguish uniform SPEED (scalar, can stay constant even around curves) from uniform VELOCITY (vector, needs a straight-line path too).",
 mistake:"Calling uniform circular motion an example of 'uniform velocity'. It is uniform speed only — direction is always changing.",
 trick:"Uniform speed only watches the number on the speedometer, never which way the steering wheel is turned.",
 note:"A car on a circular track with a fixed speedometer reading has uniform speed but a continuously changing (non-uniform) velocity."},

{id:14, ch:"4", title:"Velocity",
 def:"Velocity is the rate of change of displacement of an object; it tells us both how fast the position is changing and in which direction.",
 exp:"Velocity at a particular instant is called instantaneous velocity. Throughout this chapter the plain word 'velocity' almost always refers to this instantaneous value.",
 ex:"A car travelling 100 m due north in 5 s has a velocity of 20 m/s, north.",
 formula:"velocity = displacement / time  (SI unit: m s⁻¹), direction along the displacement.",
 tip:"Always attach a + or − sign (or a compass direction) to velocity values in straight-line numericals.",
 mistake:"Treating velocity as identical to speed in every situation. They only coincide in magnitude for one-directional straight-line motion.",
 trick:"Velocity = Speed with a Direction tag stapled on.",
 note:"An object can have ZERO velocity at an instant while still having non-zero acceleration — e.g. at the very top of a vertical throw, where gravity still acts."},

{id:15, ch:"4", title:"Average Velocity",
 def:"Average velocity over a time interval is the displacement (change in position) divided by that time interval.",
 exp:"It can be far smaller than average speed, or even zero, whenever the object ends up back near (or exactly at) its starting point.",
 ex:"NCERT Example 4.2 — Sarang's net displacement after a full there-and-back swim in 50 s is 0 m, so his average velocity is 0 m/s, even though his average speed is about 1 m/s.",
 formula:"vav = s / t = (final position − initial position) / time interval.",
 tip:"When asked 'can average velocity be zero while average speed is not?' — the answer is always YES, for any round trip back to the start.",
 mistake:"Confusing average velocity with average speed whenever the body changes direction during the journey.",
 trick:"Average velocity only checks the start and finish line — it never cares about the wiggly path taken in between.",
 note:"For one-directional straight-line motion, average speed and the magnitude of average velocity become numerically equal (NCERT Note, p.53)."},

{id:16, ch:"1", title:"Uniform Velocity",
 def:"An object has uniform velocity if it covers equal displacements in equal time intervals while moving along a straight line in a fixed, unchanging direction.",
 exp:"Both the magnitude AND the direction of the velocity stay unchanged at every single instant.",
 ex:"A train moving on a long straight track at a steady 80 km/h without ever turning.",
 formula:"velocity = constant vector (same magnitude, same direction, always).",
 tip:"For uniform velocity, acceleration must be EXACTLY zero — a very common 'is acceleration zero here?' trap question.",
 mistake:"Believing constant speed automatically means uniform velocity. That is only true if the path is also a straight line in one fixed direction.",
 trick:"Uniform velocity needs TWO things unchanged at once: speed AND direction.",
 note:"The velocity-time graph for uniform velocity is always a straight horizontal line parallel to the time axis (NCERT Fig 4.17a)."},

{id:17, ch:"1", title:"Speed vs Velocity (Comparison)",
 def:"A comparison topic distinguishing the scalar 'speed' (magnitude only) from the vector 'velocity' (magnitude plus direction).",
 exp:"Speed can never be negative; velocity can be positive, negative or zero, depending purely on the direction convention you have chosen.",
 ex:"A car going steadily around a roundabout at 40 km/h has constant SPEED but continuously CHANGING velocity, since the direction keeps turning.",
 formula:"|velocity| = speed, but only when the motion stays along one fixed direction.",
 tip:"Standard comparison-table answer: nature (scalar vs vector), defining formula, value relationship, and one real example each.",
 mistake:"Saying 'velocity is always greater than speed'. In fact |velocity| ≤ speed always; equality holds only for one-directional motion.",
 trick:"Speed tells you HOW FAST; velocity tells you HOW FAST and WHICH WAY.",
 note:"This single distinction is the conceptual gateway to understanding why acceleration can exist even at perfectly constant speed (uniform circular motion)."},

{id:18, ch:"1", title:"Acceleration",
 def:"Acceleration is the rate of change of velocity of an object with respect to time.",
 exp:"Because velocity is a vector, acceleration can arise from a change in speed, a change in direction, or a combination of both.",
 ex:"NCERT Example 4.3 — a bus speeding up from 36 km/h to 54 km/h in 10 s has an acceleration of +0.5 m/s².",
 formula:"a = (v − u) / t  (SI unit: m s⁻²).",
 tip:"Always state the direction of acceleration relative to velocity: same direction → speeding up; opposite direction → slowing down.",
 mistake:"Assuming acceleration is zero whenever speed is constant. This is false for uniform circular motion, where direction-change alone produces acceleration.",
 trick:"Acceleration is about how QUICKLY velocity is changing, never about how FAST the object happens to be going.",
 note:"A car cruising at a high but constant speed on a straight highway has ZERO acceleration — acceleration depends on rate of change, not magnitude (NCERT Note, p.55)."},

{id:19, ch:"1", title:"Uniform Acceleration",
 def:"Acceleration is uniform (constant) if the velocity changes by equal amounts in equal intervals of time, for every possible choice of those intervals.",
 exp:"This is the special case used throughout Class 9 kinematics — the three equations of motion apply ONLY when acceleration is constant.",
 ex:"NCERT Example 4.4 — a freely falling body near Earth's surface has uniform acceleration g ≈ 9.8 m/s² downward; its velocity rises by exactly 9.8 m/s every second.",
 formula:"a = constant, for all t.",
 tip:"Whenever a numerical says 'constant acceleration', that is your green light to use v=u+at, s=ut+½at², or v²=u²+2as directly.",
 mistake:"Applying the three kinematic equations to a situation with changing (non-uniform) acceleration — they only work for constant a.",
 trick:"Uniform acceleration = the same extra push, delivered every single second, no more, no less.",
 note:"The velocity-time graph for uniform acceleration is always a straight inclined line (NCERT Fig 4.17b / 4.19)."},

{id:20, ch:"1", title:"Non-Uniform Acceleration",
 def:"Acceleration is non-uniform (variable) if the velocity changes by unequal amounts in equal intervals of time.",
 exp:"Most real vehicles experience non-uniform acceleration because traffic, road conditions and driver input change continuously — the Class 9 equations cannot be applied directly here.",
 ex:"A motorbike weaving through city traffic, alternately surging forward and braking gently.",
 formula:"a = a(t), a value that itself varies with time.",
 tip:"If the data shows unequal velocity-changes over equal time gaps, immediately flag it as non-uniform acceleration and state the standard equations cannot apply.",
 mistake:"Force-fitting v = u + at onto data that clearly shows a changing acceleration value between intervals.",
 trick:"Same time gap, different push each time = non-uniform acceleration.",
 note:"The velocity-time graph for non-uniform acceleration is always a curve, never a straight line."},

{id:21, ch:"1", title:"Retardation (Negative Acceleration)",
 def:"Retardation (deceleration) is acceleration that acts opposite to the direction of motion, so that the object's speed keeps decreasing.",
 exp:"It is still 'acceleration' in the full physics sense — it just carries a negative sign relative to the chosen positive direction of velocity.",
 ex:"NCERT Example 4.3(ii) — a bus brakes from 54 km/h to rest in 5 s, giving an acceleration of −3 m/s², i.e. a retardation of 3 m/s².",
 formula:"a is negative whenever v < u, with the direction of motion taken as positive.",
 tip:"When asked for 'retardation', quote the magnitude as a positive number (retardation = 3 m/s²), even though the acceleration itself carries a minus sign.",
 mistake:"Writing a confusing double negative such as 'retardation = −(−3) m/s² = 3' without ever stating the sign convention being used.",
 trick:"Retardation is acceleration's evil twin — exactly the same formula, just pointing the opposite way.",
 note:"Always state your chosen positive direction BEFORE assigning + or − signs in any retardation numerical."},

{id:22, ch:"1", title:"Equations of Motion — Overview",
 def:"For straight-line motion with constant acceleration, three kinematic equations relate the five quantities: initial velocity (u), final velocity (v), acceleration (a), time (t), and displacement (s).",
 exp:"Knowing any THREE of these five quantities lets you solve for the remaining two using the right equation — this is the single most heavily-tested numerical skill in the whole chapter.",
 ex:"A car starting from rest (u=0) reaching 24 m/s in 6 s: use v=u+at to get a=4 m/s², then s=ut+½at² for the distance covered.",
 formula:"v = u + at  |  s = ut + ½at²  |  v² = u² + 2as.",
 tip:"Before solving, write a quick table of given/unknown quantities — this single habit prevents almost all careless errors.",
 mistake:"Reaching for v²=u²+2as when t is given/asked, when v=u+at or s=ut+½at² is the direct, faster route.",
 trick:"u-v-a-t-s: pick whichever equation is missing exactly the one quantity you don't have.",
 note:"These equations are valid ONLY for straight-line motion with constant acceleration (NCERT Note, p.65)."},

{id:23, ch:"1", title:"First Equation of Motion — Algebraic Derivation",
 def:"v = u + at gives the final velocity of a uniformly accelerated object after time t.",
 exp:"From the definition of average acceleration, a = (v−u)/t. Cross-multiplying gives at = v−u, which rearranges directly to v = u + at.",
 ex:"u=10 m/s, a=0.5 m/s², t=10 s ⟹ v = 10 + 0.5×10 = 15 m/s (matches NCERT's bus-accelerator example).",
 formula:"v = u + at.",
 tip:"This is the simplest, fastest equation — always check first whether both t and a are directly given.",
 mistake:"Plugging numbers in without converting km/h to m/s first.",
 trick:"Say it as one phrase: 'vee equals you plus at'.",
 note:"This is exactly Eq. 4.4a in NCERT, derived straight from the definition of average acceleration."},

{id:24, ch:"4", title:"First Equation of Motion — Graphical Derivation",
 def:"The same relation v = u + at can be derived purely from the slope of a velocity-time graph.",
 exp:"On a v-t graph, the initial velocity u is the y-intercept; the final velocity v is the height of the line at time t. The slope of that line equals acceleration a = (v−u)/t, which rearranges to v = u + at.",
 ex:"A v-t graph starting at u=5 m/s and rising to v=15 m/s over 10 s has slope = (15−5)/10 = 1 m/s² = a.",
 formula:"slope of v-t graph = acceleration = (v−u)/t  ⟹  v = u + at.",
 tip:"Always identify the y-intercept (gives u) and the slope (gives a) first when reading any straight-line v-t graph.",
 mistake:"Computing 'rise over run' but mixing up which axis represents velocity and which represents time.",
 trick:"Slope of a v-t graph = acceleration. Always. No exceptions.",
 note:"A perfectly horizontal v-t line has zero slope, confirming zero acceleration for uniform velocity."},

{id:25, ch:"1", title:"Second Equation of Motion — Algebraic Derivation",
 def:"s = ut + ½at² gives the displacement of a uniformly accelerated object after time t.",
 exp:"Starting from v = u + at, the displacement can also be written as the average velocity multiplied by time; substituting and simplifying produces s = ut + ½at².",
 ex:"A motorbike with u=0, a=2 m/s² for t=5 s: s = 0×5 + ½×2×25 = 25 m.",
 formula:"s = ut + ½at².",
 tip:"Reach for this equation whenever t is known/asked but v is not directly needed.",
 mistake:"Forgetting the factor of ½ in front of at² — an extremely common careless slip.",
 trick:"Say it as a little rhyme: 'u-tea, plus half-a-tea-squared' (s = ut + ½at²).",
 note:"This is Eq. 4.4b in NCERT, derived geometrically as the area of the trapezium under the v-t graph (a rectangle plus a triangle)."},

{id:26, ch:"4", title:"Second Equation of Motion — Graphical Derivation",
 def:"s = ut + ½at² can be derived directly from the area enclosed between the velocity-time graph line and the time axis.",
 exp:"This area = rectangle (u×t) + triangle (½×t×(v−u)). Substituting (v−u)=at from the first equation gives exactly s = ut + ½at².",
 ex:"NCERT's worked case: u=5 m/s, a=0.5 m/s², over a 10 s interval — displacement = rectangle (5×10=50 m) + triangle (½×10×5=25 m) = 75 m.",
 formula:"Area under v-t graph = displacement = ut + ½at².",
 tip:"Whenever a question says 'find displacement using the graph', compute the AREA, never just read off a y-value.",
 mistake:"Adding only one of the two pieces (rectangle OR triangle) instead of both.",
 trick:"Area under a v-t graph = how far you actually went. Always.",
 note:"For constant velocity (zero acceleration), the shape under the line is just a rectangle: displacement = velocity × time."},

{id:27, ch:"1", title:"Third Equation of Motion (v² = u² + 2as)",
 def:"This equation directly relates velocity and displacement, eliminating time altogether.",
 exp:"Derived by substituting t = (v−u)/a (from the first equation) into the second equation s=ut+½at², then simplifying algebraically.",
 ex:"NCERT Example 4.8 — brakes give a=−4 m/s²; for u=15 m/s (54 km/h), s = u²/8 = 225/8 ≈ 28.1 m before stopping.",
 formula:"v² = u² + 2as.",
 tip:"Use this equation whenever time t is NEITHER given NOR asked — it is the fastest route to displacement or final velocity in braking/stopping problems.",
 mistake:"Forgetting that when a vehicle decelerates to rest, it is v (final velocity) that equals zero, not u (initial velocity).",
 trick:"No time? Try v-squared! — v²=u²+2as is the time-free equation.",
 note:"This equation is the foundation of every real-life braking-distance and stopping-distance safety calculation (NCERT 'Bridging Science and Society', p.65)."},

{id:28, ch:"4", title:"Distance(Position)–Time Graphs",
 def:"A position-time graph plots how an object's position changes with time, with time on the X-axis and position on the Y-axis.",
 exp:"A straight inclined line means constant speed (uniform motion); a curved line means changing speed (non-uniform/accelerated motion); a horizontal line parallel to the time axis means the object is at rest.",
 ex:"NCERT Example 4.6 — a horizontal line fixed at position = 40 m represents a vehicle simply parked 40 m from the origin.",
 formula:"slope of a position-time graph = velocity.",
 tip:"A steeper line on a position-time graph always means a HIGHER speed — compare slopes, not heights, to decide which object is faster.",
 mistake:"Concluding an object is 'behind' another just because its line sits lower at one instant, without checking if the lines have actually crossed.",
 trick:"Steeper slope = speedier object.",
 note:"A graph is NOT a route map — it shows distance from the origin over time, never the actual geographic path taken (NCERT Note, p.58)."},

{id:29, ch:"4", title:"Velocity–Time Graphs",
 def:"A velocity-time graph plots how an object's velocity changes with time, with time on the X-axis and velocity on the Y-axis.",
 exp:"A horizontal line means constant velocity (zero acceleration); a line sloping upward means uniformly increasing velocity; a line sloping downward means uniformly decreasing velocity (retardation).",
 ex:"NCERT Fig 4.17(b)/(c) — a car speeding up from 0 to 15 m/s over 30 s (rising line) versus a car slowing from 15 to 0 m/s over 30 s (falling line), both with the same magnitude of slope.",
 formula:"slope of v-t graph = acceleration; area under v-t graph = displacement.",
 tip:"Two skills are tested every single year: finding acceleration from slope, and finding displacement from area — drill both on every graph you see.",
 mistake:"Forgetting that area BELOW the time axis (when velocity has gone negative, i.e. the object has reversed direction) represents negative displacement.",
 trick:"Slope = acceleration. Area = displacement. The two golden rules of v-t graphs.",
 note:"A curved velocity-time graph indicates non-uniform (changing) acceleration."},

{id:30, ch:"4", title:"Slope and Area Under Graphs (Unifying Tool)",
 def:"A single unifying idea: the SLOPE of any motion graph gives the rate of change of the Y-axis quantity, while the AREA under it gives the accumulated total of that rate over time.",
 exp:"Position-time graph: slope → velocity. Velocity-time graph: slope → acceleration, area → displacement. This one idea — slope = rate, area = total — unlocks every graph question in the chapter.",
 ex:"A v-t trapezium between t=10 s and t=20 s with u=5, v=10 m/s gives area = ½(5+10)×10 = 75 m, matching the rectangle-plus-triangle method exactly.",
 formula:"Position-time: slope = velocity. Velocity-time: slope = acceleration, area = displacement.",
 tip:"Memorise this slope/area summary table — it is the fastest way to attack any unfamiliar graph in the exam.",
 mistake:"Trying to read displacement directly off a velocity-time graph's Y-axis — that axis gives velocity, never displacement.",
 trick:"Slope tells you the RATE. Area tells you the TOTAL.",
 note:"This idea quietly previews the derivative/integral concepts students will meet formally in higher-grade calculus."},

{id:31, ch:"4", title:"Uniform Circular Motion",
 def:"When an object moves along a circular path with constant (uniform) speed, its motion is called uniform circular motion (UCM).",
 exp:"Even though the speed never changes, the DIRECTION of velocity changes continuously at every point — velocity is always tangent to the circle — so UCM is always an accelerated motion.",
 ex:"NCERT's merry-go-round example: a child moving from A to B to C — distance travelled is the curved arc, but displacement is the straight chord AC; after one full revolution, displacement returns to 0 while distance equals 2πR.",
 formula:"average speed for one revolution = 2πR / T (R = radius, T = time period).",
 tip:"A favourite HOTS question: 'Is uniform circular motion accelerated motion? Justify.' — Yes, because velocity's direction changes continuously even though its magnitude (speed) stays constant.",
 mistake:"Saying 'no acceleration' in UCM just because the speedometer reading never changes. Acceleration depends on velocity (a vector), not merely on speed.",
 trick:"Same speed, new direction every instant = UCM is always accelerating.",
 note:"NCERT's ring-and-marble Activity 4.5 shows that once released, the marble flies off in a STRAIGHT LINE, tangent to the circle at the release point — direct proof that velocity is tangential."},

{id:32, ch:"1", title:"Real-Life Applications: Braking Distance & Road Safety",
 def:"A practical-application topic linking kinematics to everyday safety, especially stopping/braking distance and modern vehicle-safety technology.",
 exp:"Stopping distance depends on the vehicle's initial speed, road/tyre condition, braking deceleration, and the driver's reaction time — all computable directly from v² = u² + 2as.",
 ex:"NCERT's 'Bridging Science and Society' box (p.65): doubling initial speed (54→108 km/h) roughly QUADRUPLES the braking distance (28.1 m → 112.5 m), because s ∝ u².",
 formula:"braking distance s = u² / (2|a|), when final velocity v = 0.",
 tip:"A common HOTS/case-study theme: 'Why do speed limits get stricter near schools and turns?' — link directly to s ∝ u² to explain why even modest speed cuts sharply reduce stopping distance.",
 mistake:"Assuming braking distance increases proportionally (linearly) with speed. It actually grows with the SQUARE of speed.",
 trick:"Double the speed, quadruple the danger — because s ∝ u².",
 note:"Vehicle-to-Vehicle (V2V) communication technology, now being developed in India and elsewhere, lets cars exchange signals to warn drivers of possible collisions before braking is even needed (NCERT, p.65)."}
];

/* ---------------------------------------------------------------------
   2. FORMULA FLASHCARDS
   --------------------------------------------------------------------- */
const FORMULAS = [
 {name:"Speed", formula:"speed = distance / time"},
 {name:"Average Speed", formula:"avg speed = total distance / total time"},
 {name:"Velocity", formula:"velocity = displacement / time"},
 {name:"Average Velocity", formula:"v_av = s / t"},
 {name:"Acceleration", formula:"a = (v − u) / t"},
 {name:"1st Equation of Motion", formula:"v = u + at"},
 {name:"2nd Equation of Motion", formula:"s = ut + ½at²"},
 {name:"3rd Equation of Motion", formula:"v² = u² + 2as"},
 {name:"Bonus Equation (Journey Beyond)", formula:"s = ½(u + v)t"},
 {name:"Bonus Equation (Journey Beyond)", formula:"s = vt − ½at²"},
 {name:"km/h → m/s", formula:"multiply by 5/18"},
 {name:"m/s → km/h", formula:"multiply by 18/5"},
 {name:"Distance per Revolution", formula:"distance = 2πR"},
 {name:"Avg Speed in UCM", formula:"v_av = 2πR / T"},
 {name:"Avg Speed (equal TIME parts)", formula:"(v1 + v2) / 2"},
 {name:"Avg Speed (equal DISTANCE parts)", formula:"2v1v2 / (v1 + v2)"},
 {name:"Braking / Stopping Distance", formula:"s = u² / (2|a|)"},
 {name:"Retardation", formula:"a is negative, opposite to velocity"},
 {name:"Slope of s–t Graph", formula:"slope = velocity"},
 {name:"Slope of v–t Graph", formula:"slope = acceleration"},
 {name:"Area Under v–t Graph", formula:"area = displacement"},
 {name:"Stopping Distance Rule", formula:"s ∝ u²  (double u → 4× distance)"}
];

/* ---------------------------------------------------------------------
   3. MCQ BANK (50)
   --------------------------------------------------------------------- */
const MCQ = [
{q:"Motion is said to occur when:", o:["The object's colour changes","The object's position changes with respect to a reference point","The object's mass changes","The object becomes heavier"], a:1, e:"Motion is defined purely as a change of position with time, relative to a chosen reference point."},
{q:"In the statement 'the shop is 250 m east of my home', the reference point is:", o:["The shop","East","My home","250 m"], a:2, e:"The fixed point from which position is measured (here, home) is the reference point."},
{q:"The SI unit of displacement is:", o:["m/s","metre (m)","m/s²","no unit"], a:1, e:"Displacement is a length, so its SI unit is the metre, same as distance."},
{q:"Distance is a:", o:["Vector quantity","Scalar quantity","Neither scalar nor vector","Both scalar and vector"], a:1, e:"Distance only needs a magnitude (no direction), so it is a scalar."},
{q:"Displacement is a:", o:["Scalar quantity","Vector quantity","Dimensionless quantity","Always zero quantity"], a:1, e:"Displacement needs both magnitude and direction, so it is a vector."},
{q:"For an object moving in a straight line without reversing direction, distance and the magnitude of displacement are:", o:["Always different","Always equal","Displacement always greater","Unrelated"], a:1, e:"NCERT's Note (p.51): for one-directional straight motion, distance equals the magnitude of displacement."},
{q:"An athlete runs from O to A (100 m) and then back to B (60 m). The total distance travelled is:", o:["40 m","100 m","160 m","60 m"], a:2, e:"Total distance = OA + AB = 100 + 60 = 160 m (arithmetic sum, never subtracted)."},
{q:"For the same athlete, the displacement from O to the final point B is:", o:["160 m","100 m","40 m","60 m"], a:2, e:"Displacement = final position − initial position = 100 − 60 = 40 m in the positive direction."},
{q:"A ball thrown 40 cm straight up returns to the same starting point. Its displacement is:", o:["80 cm","40 cm","0 cm","20 cm"], a:2, e:"Since the final position coincides with the initial position, displacement is exactly zero, even though distance travelled was 80 cm."},
{q:"Which of these quantities can never be negative?", o:["Velocity","Displacement","Distance","Acceleration"], a:2, e:"Distance (like speed) is a scalar that only ever adds up — it cannot be negative."},
{q:"Identify the scalar quantity from the list:", o:["Velocity","Force","Speed","Acceleration"], a:2, e:"Speed needs only a magnitude, with no associated direction, so it is scalar."},
{q:"Identify the vector quantity from the list:", o:["Mass","Time","Acceleration","Speed"], a:2, e:"Acceleration requires both a magnitude and a direction, making it a vector."},
{q:"Uniform motion means an object covers:", o:["Unequal distances in equal time","Equal distances in equal time","Equal distance in unequal time","None of these"], a:1, e:"This is the textbook definition of uniform motion — equal distances in every equal time interval."},
{q:"The position-time graph of an object in uniform motion is a:", o:["Curve","Straight horizontal line","Straight inclined line","Parabola"], a:2, e:"A straight inclined line on a position-time graph means constant speed, i.e. uniform motion."},
{q:"A horizontal line on a position-time graph (parallel to the time-axis) shows the object is:", o:["Moving uniformly","At rest","Accelerating","Decelerating"], a:1, e:"NCERT Example 4.6: an unchanging position over time means the object is stationary."},
{q:"Average speed is calculated as:", o:["total distance / total time","displacement / time","(u+v)/2","(v−u)/t"], a:0, e:"By definition, average speed = total distance travelled ÷ total time taken."},
{q:"The SI unit of speed is:", o:["km/h","m/s","metre","second"], a:1, e:"The SI (international system) unit of speed is metre per second (m s⁻¹)."},
{q:"36 km/h expressed in m/s is:", o:["10 m/s","36 m/s","100 m/s","6 m/s"], a:0, e:"36 × (5/18) = 10 m/s."},
{q:"5 m/s expressed in km/h is:", o:["18 km/h","5 km/h","50 km/h","0.5 km/h"], a:0, e:"5 × (18/5) = 18 km/h."},
{q:"Average velocity over an interval can be zero while average speed is not zero when:", o:["The object moves in one direction only","The object returns to its starting point","The object is always at rest","This can never happen"], a:1, e:"Any round trip back to the starting point gives zero net displacement, hence zero average velocity, even though distance (and average speed) is non-zero."},
{q:"In NCERT's swimming example, Sarang swims a length and back in 50 s. His average velocity for this interval is:", o:["1 m/s","2 m/s","0 m/s","0.5 m/s"], a:2, e:"His net displacement is zero (he returns to the start), so average velocity = 0 m/s, even though his average speed was about 1 m/s."},
{q:"A bus speeds up from 36 km/h to 54 km/h in 10 s. Its acceleration is:", o:["0.5 m/s²","5 m/s²","1.5 m/s²","1.9 m/s²"], a:0, e:"u=10 m/s, v=15 m/s, t=10 s ⟹ a=(15−10)/10 = 0.5 m/s² (NCERT Example 4.3)."},
{q:"The SI unit of acceleration is:", o:["m/s","m/s²","metre","newton"], a:1, e:"Acceleration is the rate of change of velocity with time, giving units of m s⁻²."},
{q:"Retardation means acceleration that acts:", o:["In the same direction as velocity, increasing it","Opposite to the direction of velocity, decreasing speed","Always equal to zero","Only in circular motion"], a:1, e:"Retardation (deceleration) is acceleration directed opposite to the velocity, slowing the object down."},
{q:"The slope of a velocity-time graph gives:", o:["Displacement","Distance","Acceleration","Speed"], a:2, e:"Slope of a v-t graph = rate of change of velocity = acceleration."},
{q:"The area under a velocity-time graph (and the time axis) gives:", o:["Acceleration","Displacement","Speed","Retardation"], a:1, e:"The accumulated area under a v-t graph equals the total displacement covered."},
{q:"The slope of a position-time graph gives:", o:["Acceleration","Velocity","Displacement","Distance"], a:1, e:"Slope of a position-time graph = rate of change of position = velocity."},
{q:"A freely falling object near Earth's surface has acceleration that is:", o:["Variable and unpredictable","Exactly zero","Uniform, ≈9.8 m/s² downward","Negative only while rising"], a:2, e:"NCERT Example 4.4 shows the velocity increases by 9.8 m/s every second — a constant acceleration called g."},
{q:"A car starts from rest and reaches 20 m/s in 5 s. Its acceleration is:", o:["4 m/s²","100 m/s²","0.25 m/s²","20 m/s²"], a:0, e:"a = (v−u)/t = (20−0)/5 = 4 m/s²."},
{q:"Using s = ut + ½at² with u=0, a=2 m/s², t=5 s, the distance covered is:", o:["10 m","25 m","50 m","5 m"], a:1, e:"s = 0×5 + ½×2×25 = 25 m."},
{q:"A car moving at 15 m/s decelerates at 4 m/s² to stop. Using v²=u²+2as, the stopping distance is closest to:", o:["28.1 m","15 m","56.3 m","7.5 m"], a:0, e:"0 = 225 − 8s ⟹ s = 225/8 ≈ 28.1 m (matches NCERT Example 4.8)."},
{q:"Which equation should you reach for when time t is neither given nor required?", o:["v = u + at","s = ut + ½at²","v² = u² + 2as","None of these"], a:2, e:"v² = u² + 2as is the only one of the three equations that does not involve time at all."},
{q:"A body moving with constant (uniform) velocity has an acceleration of:", o:["Positive","Negative","Zero","Infinite"], a:2, e:"Since neither the magnitude nor direction of velocity changes, the rate of change of velocity, i.e. acceleration, is zero."},
{q:"Uniform circular motion is characterised by:", o:["Constant velocity throughout","Constant speed, but continuously changing velocity direction","Zero acceleration","Zero speed at every point"], a:1, e:"Speed stays fixed in UCM, but the DIRECTION of velocity changes every instant, which is why it counts as accelerated motion."},
{q:"For a body completing one revolution of radius R in time T, the distance travelled is:", o:["πR","2πR","πR²","R/T"], a:1, e:"The distance covered in one full revolution equals the circumference of the circle, 2πR."},
{q:"The displacement after exactly one full revolution in uniform circular motion is:", o:["2πR","πR","Zero","R"], a:2, e:"After one complete revolution, the object returns exactly to its starting point, so net displacement is zero."},
{q:"In NCERT's Activity 4.5, a marble released from inside a spinning ring moves:", o:["In a circle, as before","In a straight line, tangent to the circle at the release point","Instantly to rest","Spirals inward"], a:1, e:"Once the circular constraint (the ring) is removed, the marble continues in the straight-line direction it had at that instant — the tangent direction."},
{q:"The velocity of an object moving on a circular path, at any point, is directed:", o:["Towards the centre","Away from the centre","Along the tangent to the circle at that point","In a random direction"], a:2, e:"Velocity in circular motion always points along the tangent to the circle, in the direction of motion."},
{q:"Which of these is an example of rotatory motion?", o:["Earth revolving around the Sun","A ceiling fan's blades spinning about its own axis","A train on a straight track","A ball thrown straight up"], a:1, e:"Rotatory motion is spinning about an object's own internal axis, exactly like a fan blade."},
{q:"A bus brakes from 54 km/h to rest in 5 s. Its acceleration is:", o:["−3 m/s²","+3 m/s²","−10.8 m/s²","−0.3 m/s²"], a:0, e:"u=15 m/s, v=0, t=5 s ⟹ a=(0−15)/5 = −3 m/s² (NCERT Example 4.3(ii))."},
{q:"In the Ganitakaumudi postmen problem, two postmen 210 yojanas apart walk towards each other at 9 and 5 yojanas/day. They will meet after:", o:["15 days","21 days","10 days","30 days"], a:0, e:"Combined speed = 14 yojanas/day; time = 210/14 = 15 days."},
{q:"Stopping (braking) distance is proportional to:", o:["Initial velocity u","u² (square of initial velocity)","1/u","A constant value, regardless of u"], a:1, e:"From v²=u²+2as with v=0: s = u²/(2|a|), so s grows with the square of u."},
{q:"If a car's speed is doubled (with the same braking deceleration), its stopping distance becomes:", o:["Double","Triple","Four times","Unchanged"], a:2, e:"Since s ∝ u², doubling u multiplies s by 2² = 4."},
{q:"A speedometer reading on a moving vehicle gives approximately the:", o:["Average velocity for the whole trip","Magnitude of the instantaneous velocity","Acceleration","Average speed for the whole trip"], a:1, e:"NCERT's 'Threads of Curiosity' (p.54) notes the speedometer reading is nearly the magnitude of velocity at that instant."},
{q:"A curved (non-straight) position-time graph indicates:", o:["Uniform motion","Non-uniform (accelerated) motion","The object is permanently at rest","The object has reversed direction permanently"], a:1, e:"A changing slope (curve) on a position-time graph means changing velocity, i.e. non-uniform motion."},
{q:"A velocity-time graph that is a straight line sloping downward towards the time axis represents:", o:["Increasing velocity","Decreasing velocity (retardation)","Constant velocity","Zero velocity at all times"], a:1, e:"A downward-sloping straight v-t line means velocity is decreasing steadily, i.e. the object is retarding."},
{q:"For one-directional straight-line motion, which relation is correct?", o:["distance < |displacement|","distance = |displacement|","distance > |displacement|, always","No fixed relation exists"], a:1, e:"With no reversal of direction, the path length exactly equals the straight-line displacement magnitude."},
{q:"For two equal distances covered at speeds v1 and v2, the average speed is:", o:["(v1+v2)/2","2v1v2/(v1+v2)","v1 × v2","v1 + v2"], a:1, e:"Equal-distance journeys need the harmonic mean formula: avg speed = 2v1v2 / (v1+v2)."},
{q:"A tangent to a circle touches it at:", o:["Two points","Exactly one point","Infinite points","Only the centre"], a:1, e:"By definition, a tangent meets a circle at one and only one point."},
{q:"NCERT's 'Bridging Science and Society' box (p.65) connects kinematics most directly to:", o:["Cooking times","Vehicle braking distance, safe following distance, and V2V technology","Sports scores","Weather prediction"], a:1, e:"This box uses the third equation of motion to explain stopping distance and modern collision-warning technology."}
];

/* ---------------------------------------------------------------------
   4. ASSERTION–REASON BANK (25)
   --------------------------------------------------------------------- */
const AR_OPTIONS = [
 "Both A and R are true, and R correctly explains A",
 "Both A and R are true, but R does NOT correctly explain A",
 "A is true, but R is false",
 "A is false, but R is true"
];
const AR = [
{a:"Displacement can be zero even when the distance travelled is not zero.", r:"Displacement depends only on the initial and final positions, not on the path taken.", ans:0, e:"Both statements are true, and the reason (depends only on start/end points) directly explains why displacement can be zero for a round trip."},
{a:"Speed is always equal to the magnitude of velocity.", r:"Speed has no direction while velocity has a direction.", ans:3, e:"Statement A is false in general — speed equals the magnitude of velocity only for one-directional straight-line motion. R is a true, independent fact about the two quantities."},
{a:"A car moving at constant speed around a circular track has zero acceleration.", r:"Acceleration depends on the rate of change of velocity, which is a vector quantity.", ans:3, e:"A is false — direction is constantly changing in circular motion, so acceleration is non-zero. R is a true statement that actually explains why A is wrong."},
{a:"The average velocity of an object can be zero even though its average speed is not zero.", r:"This happens whenever the object returns exactly to its initial position.", ans:0, e:"Both true; the reason correctly explains the assertion — a round trip gives zero net displacement but non-zero distance."},
{a:"Distance travelled by an object can never be negative.", r:"Distance is a scalar quantity representing only a magnitude.", ans:0, e:"Both true; being a scalar with no direction is exactly why distance cannot be negative."},
{a:"A freely falling body has uniform acceleration.", r:"Its velocity increases by an equal amount (about 9.8 m/s) in every successive second.", ans:0, e:"Both true; equal velocity-change per second is the definition of constant acceleration."},
{a:"The slope of a velocity-time graph gives acceleration.", r:"Acceleration is the rate of change of velocity, and slope represents exactly this rate of change.", ans:0, e:"Both true and properly connected — slope of any graph represents the rate of change of the Y-quantity with the X-quantity."},
{a:"Retardation is also a type of acceleration.", r:"Retardation acts in the same direction as the velocity.", ans:2, e:"A is true (retardation is acceleration with a negative sign). R is false — retardation acts OPPOSITE to velocity, not in the same direction."},
{a:"The equations v=u+at, s=ut+½at², v²=u²+2as apply to all kinds of motion.", r:"These equations are valid only for straight-line motion with constant acceleration.", ans:3, e:"A is false — the equations fail for non-uniform acceleration or curved paths. R correctly states the actual condition for their validity."},
{a:"An object can have zero velocity and a non-zero acceleration at the same instant.", r:"At the highest point of a vertical throw, velocity is momentarily zero, but gravity still acts on the object.", ans:0, e:"Both true; the classic vertical-throw example correctly illustrates this exact situation."},
{a:"The area enclosed between a velocity-time graph and the time axis gives displacement.", r:"This area always equals simply velocity multiplied by time, even for non-uniform motion.", ans:2, e:"A is true. R is false as stated — for non-uniform (accelerated) motion the area is a trapezium (rectangle+triangle), not a plain velocity×time product."},
{a:"Uniform circular motion is an example of accelerated motion.", r:"In uniform circular motion, the magnitude of velocity keeps changing continuously.", ans:2, e:"A is true. R is false — in UCM the magnitude (speed) stays constant; only the direction of velocity changes."},
{a:"The displacement of an object moving in a straight line in one direction equals the distance it travels.", r:"In this special case, the object never reverses direction, so the straight-line displacement matches the path length exactly.", ans:0, e:"Both true and correctly linked, as stated in the NCERT note on p.51."},
{a:"Two objects can have the same speed but different velocities.", r:"Velocity depends on both magnitude and direction, so moving in different directions at equal speed still gives different velocities.", ans:0, e:"Both true; this is exactly why velocity is a vector while speed is only a scalar."},
{a:"A body moving with uniform velocity has zero acceleration.", r:"Uniform velocity means both the magnitude and the direction of velocity remain unchanged.", ans:0, e:"Both true; since velocity never changes at all, its rate of change (acceleration) must be zero."},
{a:"It is incorrect to say an object resting on the Earth's surface is in absolute rest.", r:"The Earth itself revolves around the Sun, so the object is also in motion relative to the Sun.", ans:0, e:"Both true; this is exactly the reasoning behind NCERT's Revise-Reflect-Refine Q11."},
{a:"A position-time graph is not the most direct way to read off acceleration.", r:"Acceleration is more directly and easily obtained from the slope of a velocity-time graph.", ans:0, e:"Both true; position-time graphs directly give velocity (via slope), while acceleration needs a velocity-time graph."},
{a:"The total distance travelled in a completed round trip is always greater than its displacement (assuming the object actually moved).", r:"Displacement considers only the straight-line gap between the starting and ending points.", ans:0, e:"Both true; the reason correctly explains why distance exceeds displacement whenever any path-reversal occurs."},
{a:"A decelerating bus has negative acceleration if the direction of motion is taken as positive.", r:"Deceleration means the velocity of the object is decreasing in magnitude over time.", ans:0, e:"Both true and properly connected through the chosen sign convention."},
{a:"For non-uniform acceleration, the velocity-time graph is a curved line.", r:"Non-uniform acceleration means velocity changes by unequal amounts in equal time intervals.", ans:0, e:"Both true; unequal velocity-changes per equal time interval is exactly what produces a curve rather than a straight line."},
{a:"The magnitude of average velocity is always exactly equal to average speed.", r:"This equality holds true only when the object moves in a straight line without ever changing direction.", ans:3, e:"A is false because of the word 'always' — the two are equal only in the special one-directional case. R correctly states this exact condition."},
{a:"A tangent to a circle at a point shows the direction of velocity of an object moving along that circle at that instant.", r:"A tangent touches a circle at exactly one point and represents the instantaneous direction of motion there.", ans:0, e:"Both true and correctly connected — this is the geometric basis for velocity direction in circular motion."},
{a:"Stopping distance increases four times when a vehicle's speed is doubled, for the same braking deceleration.", r:"Stopping distance is directly proportional to the square of the initial velocity.", ans:0, e:"Both true; s=u²/(2|a|), so doubling u multiplies s by 2²=4, exactly as the reason states."},
{a:"Acceleration is zero whenever the speed of an object stays constant.", r:"Acceleration depends on the rate of change of velocity (a vector), not just on speed.", ans:3, e:"A is false — uniform circular motion is a direct counter-example, with constant speed but non-zero acceleration. R is the true, correct underlying fact."},
{a:"A suitable scale must be carefully chosen before plotting a position-time or velocity-time graph.", r:"An inappropriate scale can make the graph hard to read or distort the apparent steepness of the line.", ans:0, e:"Both true and well connected, as illustrated in NCERT's 'Journey Beyond' scale-comparison activity."}
];

/* ---------------------------------------------------------------------
   5. VERY SHORT ANSWER (25)
   --------------------------------------------------------------------- */
const VSQ = [
{q:"Define motion.", a:"Motion is the change in the position of an object with respect to a fixed reference point as time passes."},
{q:"What is a reference point?", a:"A reference point (or origin) is a fixed point chosen to describe the position of an object."},
{q:"Define distance.", a:"Distance is the total length of the actual path covered by an object during its motion, irrespective of direction."},
{q:"Define displacement.", a:"Displacement is the net change in position of an object between two instants — a straight-line distance with direction, from the first position to the second."},
{q:"Give one example each of a scalar and a vector quantity.", a:"Scalar: distance (or speed, mass, time). Vector: displacement (or velocity, acceleration, force)."},
{q:"What is the SI unit of speed?", a:"Metre per second (m s⁻¹)."},
{q:"Define average speed.", a:"Average speed is the total distance travelled divided by the total time taken to cover it."},
{q:"What is uniform motion?", a:"Motion in which an object covers equal distances in equal intervals of time, however small the interval."},
{q:"What is non-uniform motion?", a:"Motion in which an object covers unequal distances in equal intervals of time, i.e. its speed keeps changing."},
{q:"Define velocity.", a:"Velocity is the rate of change of displacement of an object; it specifies both speed and direction."},
{q:"Under what condition is average velocity zero?", a:"Average velocity is zero whenever the object returns exactly to its starting position (zero net displacement)."},
{q:"Define acceleration and give its SI unit.", a:"Acceleration is the rate of change of velocity with time; its SI unit is metre per second squared (m s⁻²)."},
{q:"What is retardation?", a:"Retardation is acceleration that acts opposite to the direction of motion, causing the object's speed to decrease."},
{q:"State the first equation of motion.", a:"v = u + at."},
{q:"State the second equation of motion.", a:"s = ut + ½at²."},
{q:"State the third equation of motion.", a:"v² = u² + 2as."},
{q:"What does the slope of a position-time graph represent?", a:"It represents the velocity of the object."},
{q:"What does the slope of a velocity-time graph represent?", a:"It represents the acceleration of the object."},
{q:"What does the area under a velocity-time graph represent?", a:"It represents the displacement covered by the object in that time interval."},
{q:"Define uniform circular motion.", a:"Motion of an object along a circular path with constant (uniform) speed is called uniform circular motion."},
{q:"Why is uniform circular motion called accelerated motion?", a:"Because although the speed stays constant, the direction of velocity changes continuously, and any change in velocity means acceleration."},
{q:"Can a body have zero velocity and still be accelerating? Give one example.", a:"Yes — at the highest point of a vertical throw, velocity is momentarily zero, but the acceleration due to gravity (g) still acts on it."},
{q:"Convert 72 km/h into m/s.", a:"72 × 5/18 = 20 m/s."},
{q:"What is the distance covered in one revolution of a circular path of radius R?", a:"The circumference of the circle, 2πR."},
{q:"Why does a marble released from inside a spinning ring move off in a straight line?", a:"Because once the circular constraint (the ring) is removed, the marble simply continues moving in the direction it had at that instant — the tangent direction."}
];

/* ---------------------------------------------------------------------
   6. SHORT ANSWER (20)
   --------------------------------------------------------------------- */
const SQ = [
{q:"Distinguish between distance and displacement (any four points).", a:"(1) Distance is the total path length; displacement is the shortest straight-line gap between start and end. (2) Distance is scalar; displacement is vector. (3) Distance is always positive; displacement can be positive, negative or zero. (4) Distance ≥ |displacement| always, with equality only for one-directional straight motion."},
{q:"Distinguish between speed and velocity.", a:"Speed is a scalar = distance/time, with no direction; velocity is a vector = displacement/time, with direction. Speed is always non-negative; velocity can be positive, negative or zero. They are numerically equal only for one-directional straight-line motion."},
{q:"Explain, with an example, why displacement can be zero while distance travelled is not.", a:"Displacement depends only on the initial and final positions. If an object returns exactly to its starting point — like a ball thrown 40 cm up and falling back to the same spot — its displacement is zero, even though it actually travelled a non-zero distance (80 cm) along the path."},
{q:"Derive v = u + at from the definition of average acceleration.", a:"By definition, a = (v−u)/t, where u is the velocity at t=0 and v is the velocity at time t. Multiplying both sides by t gives at = v−u, which rearranges directly to v = u + at."},
{q:"Explain why an object in uniform circular motion is said to be accelerating even though its speed never changes.", a:"Acceleration depends on the rate of change of velocity, and velocity is a vector with both magnitude and direction. In UCM the magnitude (speed) stays fixed, but the direction keeps changing at every point on the circle, so velocity is continuously changing — meaning the object is always accelerating."},
{q:"Explain the difference between uniform and non-uniform acceleration with one example each.", a:"Uniform acceleration: velocity changes by equal amounts in equal time intervals, e.g. a freely falling body (g ≈ 9.8 m/s² constant). Non-uniform acceleration: velocity changes by unequal amounts in equal time intervals, e.g. a car in heavy traffic, where the push/brake varies unpredictably."},
{q:"Why are the kinematic equations of motion valid only for constant acceleration?", a:"All three equations were derived assuming acceleration a is the same single value at every instant (so average acceleration = instantaneous acceleration at every point). If acceleration itself varies with time, this assumption breaks down, and the equations no longer correctly describe the motion."},
{q:"Explain how a position-time graph tells you whether an object is at rest, moving uniformly, or accelerating.", a:"A horizontal line (zero slope) means the object is at rest. A straight inclined line (constant slope) means uniform motion at constant velocity. A curved line (changing slope) means the velocity is changing, i.e. the object is accelerating (non-uniform motion)."},
{q:"Explain, using a simple rectangle, how the area under a velocity-time graph gives displacement.", a:"For constant velocity v over time t, the v-t graph is a horizontal line at height v. The 'area' under this line up to time t is a rectangle of height v and width t, i.e. area = v×t — which is exactly displacement = velocity × time."},
{q:"Explain why speed is a scalar but velocity is a vector, with one example each.", a:"Speed only tells 'how fast', requiring just a magnitude (e.g. 20 m/s), so it is scalar. Velocity tells 'how fast and which way' (e.g. 20 m/s due north), needing both a magnitude and a direction, so it is a vector."},
{q:"Explain the meaning and sign convention of retardation with an example.", a:"Retardation is acceleration directed opposite to velocity, reducing speed. If we take the direction of motion as positive, retardation appears as a negative acceleration value. Example: a car braking from 15 m/s to rest in 5 s has a = −3 m/s², i.e. a retardation of 3 m/s²."},
{q:"Why is 'rest' considered a relative term? Explain with an example.", a:"An object is at rest only with respect to a chosen reference point; the same object can be in motion relative to a different reference point. Example: a sleeping train passenger is at rest relative to the train, but in motion relative to a tree outside."},
{q:"Explain why the average speed and average velocity of a round trip are usually different.", a:"Average speed uses total DISTANCE travelled (which keeps adding up along the whole path), while average velocity uses net DISPLACEMENT (start to finish only). In a round trip, distance is large and positive, but displacement can be small or even zero, making average velocity much smaller than average speed."},
{q:"Using the V2V technology context from NCERT, explain how kinematics knowledge contributes to road safety.", a:"Stopping distance, computed from v²=u²+2as, depends heavily on a vehicle's speed and braking capacity. Vehicle-to-Vehicle (V2V) communication technology uses this same understanding of motion to let cars exchange signals and warn drivers of a possible collision before braking even becomes necessary, effectively buying back precious reaction time."},
{q:"Why does braking distance increase much faster than speed? Explain using the third equation of motion.", a:"From v²=u²+2as with final velocity v=0, we get s = u²/(2|a|). Since s depends on u SQUARED, even a modest increase in speed produces a much larger increase in stopping distance — e.g. doubling speed always quadruples the stopping distance for the same deceleration."},
{q:"Differentiate between scalar and vector quantities with two examples each.", a:"Scalars need only magnitude: e.g. distance, speed, mass, time. Vectors need both magnitude and direction: e.g. displacement, velocity, acceleration, force."},
{q:"Explain the difference between instantaneous velocity and average velocity.", a:"Instantaneous velocity is the velocity of an object at one particular instant of time. Average velocity is the displacement divided by a whole time interval, and may be quite different from the instantaneous velocity at any single moment within that interval, especially if the motion is non-uniform."},
{q:"State the two primary equations of motion from which the third equation is derived.", a:"v = u + at (first equation) and s = ut + ½at² (second equation). Eliminating t between these two by substituting t=(v−u)/a from the first into the second gives the third equation, v²=u²+2as."},
{q:"Explain why the velocity at any point of a circular path is along the tangent at that point.", a:"At any instant, an object on a circular path is momentarily moving in a straight line in the direction it is currently heading. A tangent is the unique straight line that touches the circle at just that one point without crossing into it, so it exactly represents this instantaneous direction of motion."},
{q:"Explain, using the ring-and-marble activity, what happens when the circular constraint on an object is removed.", a:"In NCERT's Activity 4.5, a marble is made to move along the inside of a ring in a circular path. When the ring is lifted away mid-motion, the marble no longer has anything forcing it to curve, so it simply continues moving in a straight line — along the tangent direction it had at the exact instant of release."}
];

/* ---------------------------------------------------------------------
   7. LONG ANSWER (10)
   --------------------------------------------------------------------- */
const LQ = [
{q:"Derive all three equations of motion algebraically for an object moving in a straight line with constant acceleration.", a:"Let an object have initial velocity u at t=0 and final velocity v at time t, moving with constant acceleration a, covering displacement s.\n\n(1) By definition, a = (v−u)/t. Multiplying by t: at = v−u, so v = u + at.\n\n(2) Displacement = average velocity × time. Since acceleration is constant, average velocity = (u+v)/2. So s = (u+v)/2 × t. Substituting v = u+at: s = (u + u+at)/2 × t = (2u+at)/2 × t = ut + ½at².\n\n(3) From (1), t = (v−u)/a. Substitute into s = ut + ½at²: s = u(v−u)/a + ½a[(v−u)/a]² = (uv−u²)/a + (v−u)²/(2a). Combining over a common denominator 2a and simplifying: 2as = 2uv−2u² + v²−2uv+u² = v²−u². Hence v² = u² + 2as."},
{q:"Derive all three equations of motion graphically using a velocity-time graph.", a:"Draw a v-t graph: a straight line from point A (0, u) to point E (t, v), since acceleration is constant. Drop a perpendicular from A to the time axis at D, and from E down to meet at D's vertical line at B, forming rectangle OABD and triangle ABE on top (relabel as needed).\n\n(1) Slope of line AE = acceleration a = (v−u)/t ⟹ v = u + at.\n\n(2) Displacement s = area under the line AE down to the time axis = area of rectangle (u × t) + area of triangle (½ × t × (v−u)). Substituting (v−u) = at: s = ut + ½at².\n\n(3) From the area expression, eliminate t using t=(v−u)/a (from the slope relation) and substitute into s = ut + ½at² to get v² = u² + 2as after algebraic simplification, exactly as in the algebraic method."},
{q:"Derive s = ut + ½at² using the area under the velocity-time graph, explaining each geometric step.", a:"On a v-t graph, plot the straight line from (0, u) to (t, v). The region between this line and the time-axis, from 0 to t, is a trapezium. Split it into: (a) a rectangle of width t and height u (area = ut), representing the displacement if the velocity had stayed constant at u; and (b) a triangle of base t and height (v−u) sitting on top of the rectangle (area = ½ × t × (v−u)), representing the EXTRA displacement gained because velocity was actually increasing. Total displacement s = ut + ½t(v−u). Substituting (v−u) = at from the first equation gives s = ut + ½at²."},
{q:"Explain in detail how to plot a position-time graph and interpret its different possible shapes.", a:"To plot: draw perpendicular X (time) and Y (position) axes meeting at origin O; choose a convenient scale for each axis; mark the given time values on X and position values on Y; for each (time, position) pair, draw a line parallel to Y at that time-value and a line parallel to X at that position-value, and mark their intersection; finally join all plotted points.\n\nInterpretation: A straight HORIZONTAL line (parallel to the time-axis) means the object's position never changes — it is at REST. A straight INCLINED line means the object covers equal distances in equal times — UNIFORM motion at constant velocity (steeper = faster). A CURVED line means the object covers unequal distances in equal times — NON-UNIFORM (accelerated) motion, with the changing steepness showing changing velocity."},
{q:"Explain uniform circular motion in detail: define it, explain why it is accelerated, derive its average speed formula, and give real-life examples.", a:"Definition: motion of an object along a circular path with constant (uniform) speed.\n\nWhy accelerated: velocity is a vector — speed (its magnitude) stays constant, but its direction (always tangent to the circle) changes continuously as the object moves around. Since velocity is changing (even though only in direction), the object is always accelerating.\n\nAverage speed formula: if an object covers one full revolution (distance = circumference = 2πR) in time T (the time period), then average speed v_av = total distance / total time = 2πR / T.\n\nReal-life examples: a satellite orbiting the Earth in a near-circular path, the tip of a clock's second hand, a vehicle going around a circular roundabout, children on a merry-go-round."},
{q:"Discuss in detail the difference between distance & displacement, and speed & velocity, with at least three example scenarios each.", a:"Distance vs Displacement: (i) An athlete running 100 m forward then 60 m back — distance 160 m, displacement 40 m. (ii) A ball thrown up 40 cm and falling back — distance 80 cm, displacement 0. (iii) A car driving once around a circular track of radius R — distance 2πR, displacement 0.\n\nSpeed vs Velocity: (i) A car at a constant 60 km/h on a straight highway — speed and velocity have equal magnitude, same direction throughout. (ii) A car going steadily around a roundabout at 40 km/h — speed constant, but velocity constantly changing direction. (iii) A train slowing from 80 km/h to 0 — its speed decreases while its velocity decreases in magnitude too, but if it were to ever reverse, velocity would also flip sign while speed stays positive."},
{q:"Explain how the concept of motion is relative, using at least three examples.", a:"(i) A passenger asleep on a moving train is at rest relative to the train, but in motion relative to a tree outside the window. (ii) An object resting on the ground is at rest relative to the Earth's surface, but is actually in motion relative to the Sun, since the Earth itself orbits the Sun. (iii) Two cars travelling side-by-side at the same velocity appear to be at rest relative to each other (e.g. drivers can comfortably wave to one another), even though both are moving fast relative to the road. In every case, whether an object is 'at rest' or 'in motion' depends entirely on which reference point the observer has chosen."},
{q:"Describe the full step-by-step procedure to plot a velocity-time graph and extract acceleration and displacement from it.", a:"Step 1: Draw perpendicular axes, time (X) and velocity (Y), meeting at origin O. Step 2: Choose a suitable scale for each axis based on the data range. Step 3: Plot each (time, velocity) data point and join them. Step 4: To find ACCELERATION between two points A(t1,u) and B(t2,v) on the graph, compute the slope = (v−u)/(t2−t1) — this slope IS the acceleration. Step 5: To find DISPLACEMENT over an interval, calculate the AREA enclosed between the graph line and the time-axis over that interval — split the region into a rectangle and a triangle if the line is sloped, add their areas, and that sum is the displacement."},
{q:"Explain how stopping distance depends on speed, road condition, tyre wear, and reaction time; relate this to road safety using the third equation of motion.", a:"Total stopping distance = (distance covered during the driver's reaction time, at constant speed) + (braking distance once brakes are actually applied). The braking part follows v²=u²+2as with v=0, giving s = u²/(2|a|): a higher initial speed u dramatically increases stopping distance because of the SQUARE relationship; wet roads or worn tyres reduce the magnitude of deceleration |a| achievable, which directly increases s for the same u; and a longer driver reaction time simply adds more constant-speed distance before braking even starts. This is exactly why speed limits are stricter, and following distances recommended to be larger, in poor road or weather conditions — and why technologies like V2V communication, which effectively shrink the reaction-time component, meaningfully improve road safety."},
{q:"Explain the four basic types of motion (linear, circular, rotatory, oscillatory) with two real-life examples of each.", a:"Linear motion (straight line): a train on a straight track; a ball falling vertically. Circular motion (along a circle): the Moon orbiting the Earth; a stone whirled on a string. Rotatory motion (spinning about an internal axis): a spinning top; the blades of a ceiling fan. Oscillatory/vibratory motion (to-and-fro about a mean position): a swinging pendulum; the vibrating string of a guitar."}
];

/* ---------------------------------------------------------------------
   8. HOTS (10)
   --------------------------------------------------------------------- */
const HOTS = [
{q:"A train moves with uniform velocity, and a ball is dropped from the top of one of its compartments. Will a passenger inside the train see the ball fall straight down, or curved? What would a person standing outside, on the platform, see? Explain.", a:"A passenger inside the train (moving with the same uniform horizontal velocity as the train) sees the ball fall straight down, because both the passenger and the ball already share the same constant horizontal velocity, and only the vertical motion due to gravity is left to notice. A person standing still on the platform, however, sees the ball follow a curved (parabolic-looking) path, because relative to the platform the ball has BOTH the train's constant horizontal velocity AND the downward acceleration due to gravity at the same time. This illustrates that the description of motion always depends on the reference point chosen by the observer."},
{q:"Car A moves with uniform velocity from the start. Car B starts from rest at the same point and time, with uniform acceleration. Describe how their position-time graphs differ, and discuss whether B can ever catch up to A.", a:"Car A's position-time graph is a straight inclined line (constant slope = constant velocity) starting from the origin. Car B's position-time graph is a curve that starts flat (zero slope, since B starts from rest) and becomes progressively steeper (since B's velocity is continuously increasing). Initially A is ahead because it has speed from t=0, while B has none. However, because B's velocity keeps growing while A's stays fixed, B's slope will eventually exceed A's slope, and B's curve will cross A's straight line at some later time — meaning B CAN, and eventually will, catch up to and overtake A, provided B keeps accelerating long enough."},
{q:"Can an object have a constant speed but a continuously varying velocity? Justify your answer with a concrete example.", a:"Yes. Velocity is a vector with both magnitude (speed) and direction. In uniform circular motion, an object's speed (the magnitude of velocity) stays exactly constant, but its direction is continuously changing as it moves around the circle. Since velocity = speed + direction, and direction is always changing, the velocity itself is continuously varying even though the speed never does. A car going round a roundabout at a constant 30 km/h is a real-world example."},
{q:"Is it correct to say 'a fast-moving object must be accelerating'? Construct an example to disprove this statement.", a:"No, this is incorrect. Acceleration depends only on the RATE OF CHANGE of velocity, not on how large the velocity itself is. A bullet train moving at a very high but absolutely constant 300 km/h on a straight track has an enormous speed but exactly ZERO acceleration, because its velocity (magnitude and direction) never changes. Acceleration and speed are independent properties of motion."},
{q:"A stone is thrown vertically upward. Describe the sign and behaviour of its velocity and its acceleration throughout the journey: going up, at the highest point, and coming back down.", a:"Taking 'upward' as the positive direction: while going up, velocity is positive but continuously decreasing in magnitude (because gravity decelerates it), and acceleration is constant and negative (g, acting downward) throughout. At the highest point, velocity becomes exactly zero for an instant, but acceleration is STILL −g — it never becomes zero, since gravity keeps acting even when the stone is momentarily motionless. While coming down, velocity becomes negative (now pointing downward) and keeps increasing in magnitude, while acceleration remains the same constant −g the entire time. The key insight: acceleration due to gravity never switches off or changes, only the velocity's sign and magnitude change because of it."},
{q:"If a velocity-time graph is a straight horizontal line above the time-axis, what can you conclude about displacement versus time? Is the corresponding position-time graph also a straight line?", a:"A horizontal v-t line means constant, non-zero velocity. The area under this line up to any time t is a rectangle of height v and width t, so displacement grows in direct, linear proportion to time (s = v×t). Consequently, the corresponding position-time graph is ALSO a straight line — specifically an inclined straight line with slope equal to that constant velocity v, starting from whatever the initial position was."},
{q:"Explain, using the relation v²=u²+2as, why doubling a vehicle's speed is far more dangerous (in terms of stopping distance) than, say, doubling its mass.", a:"From v²=u²+2as (with final v=0), the stopping distance is s = u²/(2|a|). This shows stopping distance depends on the SQUARE of the initial speed u, so doubling speed always quadruples the stopping distance, for the same braking deceleration. Mass, on the other hand, does not even appear in this kinematic equation at all — within this chapter's scope, stopping distance (assuming the same deceleration can still be achieved) is determined purely by speed, not mass, which is exactly why speed limits, not weight limits, are the primary tool used to control stopping-distance risk on roads."},
{q:"A marble is made to move along the inside of a circular ring and is released at different points around the circle on different trials. Explain why the straight-line path the marble follows after release is different each time, even though the ring itself never changes.", a:"At the instant of release, the marble continues moving in whatever direction it was heading at that exact point on the circle — and this direction is the TANGENT to the circle at that specific point. Since the tangent direction is different at every point around a circle, releasing the marble at a different point sends it off along a different straight line each time, even though the ring (and the marble's speed) stayed exactly the same. This demonstrates that velocity direction in circular motion is purely a function of POSITION on the circle, not of the ring itself."},
{q:"Why can the average velocity over a time interval be very different from the instantaneous velocity at the exact midpoint of that interval, for a non-uniformly accelerated object? Give a conceptual example.", a:"Average velocity only depends on the net displacement over the WHOLE interval (start and end positions), and says nothing about how the velocity behaved in between. If acceleration is non-uniform, the object could move very slowly for most of the interval and then suddenly speed up sharply near the very end (or vice-versa), so the instantaneous velocity exactly at the midpoint could be much smaller or much larger than the overall average. Example: a sprinter who starts very slowly out of the blocks and then accelerates explosively in the final stretch will have a midpoint instantaneous velocity well below their average velocity for the full sprint."},
{q:"A student claims, 'If acceleration is zero, the object must be at rest.' Critically evaluate this statement using examples from this chapter.", a:"This statement is incorrect. Zero acceleration only means velocity is NOT changing — it says nothing about whether that unchanging velocity is itself zero or not. A car cruising at a constant 100 km/h on a straight highway has exactly zero acceleration, yet it is clearly moving, not at rest. Zero acceleration is consistent with EITHER a stationary object (velocity constantly zero) OR an object in uniform motion (velocity constant but non-zero) — the two cases are completely different, and the student's claim wrongly assumes only the first is possible."}
];

/* ---------------------------------------------------------------------
   9. CASE STUDY QUESTIONS (6 passages, 4 sub-questions each)
   --------------------------------------------------------------------- */
const CASES = [
{title:"Case Study 1 — The Athlete on the Straight Track",
 passage:"An athlete starts running from point O (the origin) at time t = 0 s. She reaches point B (40 m from O) at t = 4 s, continues to point A (100 m from O) at t = 10 s, then turns around and runs back along the same path, reaching point B again at t = 16 s. Use this data to answer the following.",
 subs:[
  {q:"What is the total distance travelled by the athlete from t=0 s to t=16 s?", a:"Distance = O→A + A→B (return) = 100 m + 60 m = 160 m."},
  {q:"What is her displacement from t=0 s to t=16 s?", a:"Displacement = final position − initial position = 40 m − 0 m = 40 m, in the positive direction (towards A)."},
  {q:"What is her average speed over this 16 s interval?", a:"Average speed = total distance / total time = 160 m / 16 s = 10 m/s."},
  {q:"What is her average velocity over this 16 s interval?", a:"Average velocity = displacement / time = 40 m / 16 s = 2.5 m/s, in the positive direction."}
 ]},
{title:"Case Study 2 — The Bus on the Highway",
 passage:"A bus moving on a straight highway has a velocity of 36 km/h. The driver presses the accelerator, and over the next 10 s the velocity increases to 54 km/h. After cruising for a while, the driver spots an obstacle ahead and brakes, bringing the bus to a complete stop in 5 s.",
 subs:[
  {q:"What is the bus's initial speed, in m/s, before the accelerator was pressed?", a:"36 km/h × 5/18 = 10 m/s."},
  {q:"Calculate the acceleration of the bus while the accelerator was pressed.", a:"u=10 m/s, v=15 m/s (54 km/h), t=10 s. a=(15−10)/10 = 0.5 m/s², in the direction of motion."},
  {q:"Calculate the acceleration of the bus while braking.", a:"u=15 m/s, v=0, t=5 s. a=(0−15)/5 = −3 m/s²."},
  {q:"Is the braking value acceleration or retardation? Justify.", a:"It is retardation, because the acceleration (−3 m/s²) acts opposite to the direction of motion, causing the bus's speed to decrease to zero."}
 ]},
{title:"Case Study 3 — Braking Distance and Road Safety",
 passage:"A car's brakes can produce a constant deceleration of 4 m/s². NCERT's worked example computes the stopping distance for two different initial speeds: 54 km/h and 108 km/h.",
 subs:[
  {q:"Calculate the stopping distance at 54 km/h (15 m/s).", a:"v²=u²+2as ⟹ 0=225−8s ⟹ s=225/8 ≈ 28.1 m."},
  {q:"Calculate the stopping distance at 108 km/h (30 m/s).", a:"0=900−8s ⟹ s=900/8=112.5 m."},
  {q:"Find the ratio of the second stopping distance to the first, and explain why it is not simply 2.", a:"Ratio = 112.5/28.1 ≈ 4. It is not 2 because stopping distance depends on the SQUARE of the initial speed (s ∝ u²); doubling speed always quadruples stopping distance, not doubles it."},
  {q:"How could V2V (Vehicle-to-Vehicle) communication technology help in this scenario?", a:"V2V technology lets vehicles exchange signals and warn drivers of a possible collision even before the driver notices the danger, effectively reducing the reaction-time portion of the total stopping distance and giving the driver more time to brake safely."}
 ]},
{title:"Case Study 4 — The Merry-Go-Round",
 passage:"A child sits on a merry-go-round moving in a circle of radius R = 5 m at a constant speed. Take π ≈ 3.14.",
 subs:[
  {q:"What distance does the child travel after completing exactly one full revolution?", a:"Distance = 2πR = 2×3.14×5 = 31.4 m."},
  {q:"What is the child's displacement after exactly one full revolution?", a:"Zero — the child returns exactly to the starting point."},
  {q:"What are the distance and displacement after exactly HALF a revolution?", a:"Distance = πR = 3.14×5 = 15.7 m. Displacement = the diameter = 2R = 10 m (the straight-line gap directly across the circle)."},
  {q:"Is the child's motion accelerated throughout the ride, even though the speed is constant? Justify.", a:"Yes — even though the speed never changes, the direction of the child's velocity changes continuously at every point around the circle, and any change in velocity (even direction alone) means the motion is accelerated."}
 ]},
{title:"Case Study 5 — The Ball Thrown Vertically Upward",
 passage:"A ball is thrown vertically upward from point O (0 cm). On its way up, it passes point A at 40 cm. It reaches its highest point, B, at 140 cm. On the way back down, it passes point C at 80 cm, before finally returning to O.",
 subs:[
  {q:"What is the total distance travelled by the ball for the complete trip, O→A→B→C→O?", a:"Going up: O to B = 140 cm. Coming down: B to O = 140 cm. Total distance = 140 + 140 = 280 cm."},
  {q:"What is the displacement of the ball from O to B (the highest point)?", a:"140 cm, in the upward direction."},
  {q:"What is the displacement of the ball from O to C (on the way down)?", a:"80 cm, in the upward direction (C is still above the starting point O)."},
  {q:"What is the displacement for the entire round trip, O back to O, and how does it compare with the total distance found above?", a:"Displacement for the full round trip is 0 cm, since the ball returns exactly to its starting point — even though the total distance travelled was a non-zero 280 cm."}
 ]},
{title:"Case Study 6 — The Two Postmen (Ganitakaumudi, 14th century CE)",
 passage:"Two postmen start walking towards each other from a distance of 210 yojanas apart. One walks at 9 yojanas per day, and the other at 5 yojanas per day.",
 subs:[
  {q:"What combined distance do both postmen cover together in one day?", a:"9 + 5 = 14 yojanas per day."},
  {q:"After how many days will the two postmen meet?", a:"Total distance to cover together = 210 yojanas. Time = 210/14 = 15 days."},
  {q:"How far will the first postman (9 yojanas/day) have travelled by the time they meet?", a:"9 × 15 = 135 yojanas."},
  {q:"How far will the second postman (5 yojanas/day) have travelled by the time they meet, and does this match the total distance?", a:"5 × 15 = 75 yojanas. Check: 135 + 75 = 210 yojanas, which exactly matches the original separation — confirming the answer."}
 ]}
];

/* ---------------------------------------------------------------------
   10. NUMERICAL PROBLEMS (36: 9 easy, 9 medium, 9 hard, 9 very hard)
   --------------------------------------------------------------------- */
const NUM = [
// EASY
{diff:"easy", q:"A car travels 150 m in 10 s at constant speed. Find its speed.", given:"distance = 150 m, time = 10 s", formula:"speed = distance / time", sub:"speed = 150 / 10", ans:"15 m/s"},
{diff:"easy", q:"Convert 90 km/h into m/s.", given:"90 km/h", formula:"m/s = km/h × 5/18", sub:"90 × 5/18", ans:"25 m/s"},
{diff:"easy", q:"Convert 15 m/s into km/h.", given:"15 m/s", formula:"km/h = m/s × 18/5", sub:"15 × 18/5", ans:"54 km/h"},
{diff:"easy", q:"A cyclist covers 12 km in 40 minutes. Find the average speed in km/h.", given:"distance = 12 km, time = 40 min = 2/3 h", formula:"avg speed = distance / time", sub:"12 ÷ (2/3)", ans:"18 km/h (= 5 m/s)"},
{diff:"easy", q:"A body starts from rest and attains a velocity of 20 m/s in 4 s. Find its acceleration.", given:"u = 0, v = 20 m/s, t = 4 s", formula:"a = (v − u) / t", sub:"a = (20 − 0) / 4", ans:"5 m/s²"},
{diff:"easy", q:"An object decelerates from 30 m/s to 10 m/s in 5 s. Find its retardation.", given:"u = 30 m/s, v = 10 m/s, t = 5 s", formula:"a = (v − u) / t", sub:"a = (10 − 30) / 5 = −4", ans:"Retardation = 4 m/s²"},
{diff:"easy", q:"A scooter moving at 10 m/s comes to rest in 2 s. Find the distance it travels before stopping.", given:"u = 10 m/s, v = 0, t = 2 s ⟹ a = −5 m/s²", formula:"s = ut + ½at²", sub:"s = 10×2 + ½×(−5)×2²= 20 − 10", ans:"10 m"},
{diff:"easy", q:"Find the distance travelled by a body in 5 s if it starts from rest with acceleration 2 m/s².", given:"u = 0, a = 2 m/s², t = 5 s", formula:"s = ut + ½at²", sub:"s = 0 + ½×2×25", ans:"25 m"},
{diff:"easy", q:"A wheel of radius 0.5 m completes one revolution. Find the distance travelled (use π ≈ 3.14).", given:"R = 0.5 m", formula:"distance = 2πR", sub:"2 × 3.14 × 0.5", ans:"3.14 m"},
// MEDIUM
{diff:"medium", q:"A train accelerates uniformly from 36 km/h to 72 km/h in 20 s. Find its acceleration and the distance covered.", given:"u = 10 m/s, v = 20 m/s, t = 20 s", formula:"a=(v−u)/t ; s=ut+½at²", sub:"a=(20−10)/20=0.5 ; s=10×20+½×0.5×400=200+100", ans:"a = 0.5 m/s², s = 300 m"},
{diff:"medium", q:"A car moving at 20 m/s is brought to rest by brakes in 4 s. Find the retardation and the distance travelled before stopping.", given:"u=20 m/s, v=0, t=4 s", formula:"a=(v−u)/t ; s=ut+½at²", sub:"a=(0−20)/4=−5 ; s=20×4+½×(−5)×16=80−40", ans:"retardation = 5 m/s², s = 40 m"},
{diff:"medium", q:"A body has an initial velocity of 5 m/s and a uniform acceleration of 2 m/s² for 10 s. Find its final velocity and distance covered.", given:"u=5 m/s, a=2 m/s², t=10 s", formula:"v=u+at ; s=ut+½at²", sub:"v=5+20=25 ; s=5×10+½×2×100=50+100", ans:"v = 25 m/s, s = 150 m"},
{diff:"medium", q:"Find the time taken by a car moving at 25 m/s to stop if its deceleration is 5 m/s², and the distance it covers while stopping.", given:"u=25 m/s, v=0, a=−5 m/s²", formula:"t=(v−u)/a ; v²=u²+2as", sub:"t=(0−25)/(−5)=5 ; 0=625−10s ⟹ s=62.5", ans:"t = 5 s, s = 62.5 m"},
{diff:"medium", q:"A train covers the first 150 km of a 300 km journey at 50 km/h, and the remaining 150 km at 75 km/h. Find the average speed for the whole journey.", given:"d1=150 km at 50 km/h, d2=150 km at 75 km/h", formula:"avg speed = total distance / total time", sub:"t1=150/50=3h, t2=150/75=2h; total t=5h; avg=300/5", ans:"60 km/h"},
{diff:"medium", q:"A boy walks at 5 km/h for 30 minutes, then runs at 10 km/h for 15 minutes. Find the total distance and the average speed for the trip.", given:"v1=5 km/h, t1=0.5 h; v2=10 km/h, t2=0.25 h", formula:"distance = speed×time ; avg speed = total distance/total time", sub:"d1=2.5 km, d2=2.5 km, total=5 km; total time=0.75 h; avg=5/0.75", ans:"total distance = 5 km, average speed ≈ 6.67 km/h"},
{diff:"medium", q:"A particle moves along a circle of radius 7 m and completes 10 revolutions in 22 s. Find its average speed (use π=22/7).", given:"R=7 m, 10 revolutions in 22 s", formula:"distance = n×2πR ; speed = distance/time", sub:"distance=10×2×(22/7)×7=440 m; speed=440/22", ans:"20 m/s"},
{diff:"medium", q:"A body's velocity changes from 12 m/s to 20 m/s while covering 64 m. Find its acceleration.", given:"u=12 m/s, v=20 m/s, s=64 m", formula:"v²=u²+2as", sub:"400=144+128a ⟹ 256=128a", ans:"2 m/s²"},
{diff:"medium", q:"A stone is dropped from a height and hits the ground after 4 s. Taking g=9.8 m/s² and u=0, find its final velocity and the height of fall.", given:"u=0, g=9.8 m/s², t=4 s", formula:"v=u+gt ; h=ut+½gt²", sub:"v=0+9.8×4=39.2 ; h=0+½×9.8×16=78.4", ans:"v = 39.2 m/s, h = 78.4 m"},
// HARD
{diff:"hard", q:"A car travelling at 54 km/h is brought to rest in 6 s. Find (i) the retardation, (ii) the distance travelled before stopping, and (iii) the stopping distance if the initial speed were doubled, with the same retardation.", given:"u=15 m/s, v=0, t=6 s", formula:"a=(v−u)/t ; s=u²/(2|a|)", sub:"a=(0−15)/6=−2.5 ; s1=225/5=45 ; for u'=30, s2=900/5=180", ans:"retardation = 2.5 m/s², s1 = 45 m, s2 = 180 m (exactly 4× of 45 m)"},
{diff:"hard", q:"A bus moving at 20 m/s decelerates uniformly at 4 m/s². Find how far it travels before its speed reduces to 5 m/s, and the time taken for this change.", given:"u=20 m/s, v=5 m/s, a=−4 m/s²", formula:"v²=u²+2as ; t=(v−u)/a", sub:"25=400−8s ⟹ s=46.875 ; t=(5−20)/(−4)=3.75", ans:"s = 46.875 m, t = 3.75 s"},
{diff:"hard", q:"A car starts from rest and accelerates uniformly at 2 m/s² for 10 s, then moves at constant velocity for 20 s, and finally decelerates uniformly to rest in 5 s. Find the total distance covered in all three phases.", given:"Phase1: u=0,a=2,t=10 ; Phase2: v=const for 20s ; Phase3: decelerate to rest in 5s", formula:"s=ut+½at² for each phase", sub:"v after phase1=20; s1=½×2×100=100; s2=20×20=400; a3=(0−20)/5=−4, s3=20×5+½×(−4)×25=100−50=50", ans:"total distance = 100+400+50 = 550 m"},
{diff:"hard", q:"Two trains start from stations 240 km apart and move towards each other, A at 60 km/h and B at 40 km/h. Find the time after which they meet, and the distance from A's station.", given:"separation=240 km, vA=60 km/h, vB=40 km/h", formula:"t = separation / (vA+vB) ; distance from A = vA × t", sub:"t=240/100=2.4 ; dA=60×2.4", ans:"t = 2.4 h, meeting point is 144 km from A's station"},
{diff:"hard", q:"A cyclist moving at 6 m/s applies brakes and decelerates uniformly, stopping after covering 9 m. Find the deceleration and the time taken to stop.", given:"u=6 m/s, v=0, s=9 m", formula:"v²=u²+2as ; t=(v−u)/a", sub:"0=36+18a ⟹ a=−2 ; t=(0−6)/(−2)", ans:"deceleration = 2 m/s², t = 3 s"},
{diff:"hard", q:"A car's velocity increases uniformly from 0 to 30 m/s in 15 s, stays constant for the next 10 s, then decreases uniformly to 0 in the final 5 s. Using the velocity-time graph areas, find the total distance travelled in these 30 s.", given:"Phase1: triangle, 0→30 m/s over 15s ; Phase2: rectangle, 30 m/s for 10s ; Phase3: triangle, 30→0 m/s over 5s", formula:"area = ½×base×height (triangle) or base×height (rectangle)", sub:"A1=½×15×30=225 ; A2=30×10=300 ; A3=½×5×30=75", ans:"total distance = 225+300+75 = 600 m"},
{diff:"hard", q:"A car's velocity rises from 5 m/s to 25 m/s in 8 s, then immediately falls back to 5 m/s in the next 4 s. Find the acceleration in each phase and the total displacement in 12 s using the trapezium area method.", given:"Phase1: 5→25 m/s in 8s ; Phase2: 25→5 m/s in 4s", formula:"a=(v−u)/t ; area(trapezium)=½(u+v)×t", sub:"a1=(25−5)/8=2.5 ; A1=½(5+25)×8=120 ; a2=(5−25)/4=−5 ; A2=½(25+5)×4=60", ans:"a1 = 2.5 m/s², a2 = −5 m/s², total displacement = 120+60 = 180 m"},
{diff:"hard", q:"A motorboat starting from rest moves with constant acceleration and covers 250 m in 10 s. Find its acceleration and its velocity at the end of 10 s.", given:"u=0, s=250 m, t=10 s", formula:"s=½at² ; v=u+at", sub:"250=½×a×100 ⟹ a=5 ; v=0+5×10", ans:"a = 5 m/s², v = 50 m/s"},
{diff:"hard", q:"A body moving with uniform acceleration has velocities 8 m/s and 20 m/s at two instants 6 s apart. Find its acceleration and the distance covered in this 6 s interval.", given:"u=8 m/s, v=20 m/s, t=6 s", formula:"a=(v−u)/t ; s=½(u+v)t", sub:"a=(20−8)/6=2 ; s=½(8+20)×6=84", ans:"a = 2 m/s², s = 84 m"},
// VERY HARD
{diff:"vhard", q:"A train 100 m long moves at a uniform velocity of 72 km/h. Find the time it takes to completely cross a platform 200 m long.", given:"train length=100 m, platform length=200 m, v=72 km/h=20 m/s", formula:"total distance = train length + platform length ; t = distance/speed", sub:"distance=300 m ; t=300/20", ans:"15 s"},
{diff:"vhard", q:"A car moving at 20 m/s brakes and decelerates uniformly at 4 m/s². A wall is 40 m ahead when the brakes are applied. Will the car hit the wall, and if so, at what speed?", given:"u=20 m/s, a=−4 m/s², s=40 m available", formula:"v²=u²+2as ; stopping distance = u²/(2|a|)", sub:"stopping distance=400/8=50 m (>40 m available); at s=40: v²=400−320=80 ⟹ v=√80", ans:"Yes, the car hits the wall, at about 8.9 m/s (since the 50 m needed to stop exceeds the 40 m available)"},
{diff:"vhard", q:"A bus travelling at 36 km/h sees an obstacle 30 m ahead. The driver reacts in 0.5 s before braking, then decelerates uniformly at 2.5 m/s². Will the bus stop before reaching the obstacle?", given:"u=10 m/s, reaction time=0.5 s, a=−2.5 m/s², obstacle at 30 m", formula:"reaction distance = u×t ; braking distance from v²=u²+2as (v=0)", sub:"reaction distance=10×0.5=5 m; remaining=30−5=25 m available; braking distance: 0=100−5s ⟹ s=20 m", ans:"Yes — the bus needs only 20 m to brake out of the 25 m available, stopping with 5 m to spare"},
{diff:"vhard", q:"A car (u=20 m/s) accelerates at 2 m/s². A truck, 100 m ahead and moving in the same direction at u=15 m/s, accelerates at 1 m/s² from the same starting instant. Find when the car catches up to the truck, and how far the car has travelled by then.", given:"x_car(t)=20t+t² ; x_truck(t)=100+15t+0.5t²", formula:"Set x_car(t) = x_truck(t) and solve for t", sub:"20t+t²=100+15t+0.5t² ⟹ 0.5t²+5t−100=0 ⟹ t²+10t−200=0 ⟹ t=(−10+30)/2", ans:"t = 10 s; car has travelled 20×10+10² = 300 m"},
{diff:"vhard", q:"A stone is thrown vertically upward with velocity 29.4 m/s. Taking g=9.8 m/s², find (i) the maximum height reached and (ii) the total time to return to the thrower's hand.", given:"u=29.4 m/s, g=9.8 m/s² (deceleration while rising)", formula:"v²=u²−2gh (v=0 at top) ; time up = u/g, total time = 2×(time up)", sub:"0=864.36−19.6h ⟹ h=44.1 ; time up=29.4/9.8=3 s", ans:"maximum height = 44.1 m, total time = 6 s"},
{diff:"vhard", q:"A particle moves along a circular path of circumference 88 m, completing a revolution every 11 s, for exactly 4 complete revolutions before stopping. Find (i) total distance, (ii) total displacement, (iii) average speed, and (iv) average velocity over the whole journey.", given:"circumference=88 m, T=11 s per revolution, 4 revolutions ⟹ total time=44 s", formula:"distance = n × circumference ; avg speed = distance/time ; displacement after whole revolutions = 0", sub:"distance=4×88=352 m ; avg speed=352/44", ans:"distance = 352 m, displacement = 0 m, average speed = 8 m/s, average velocity = 0 m/s"},
{diff:"vhard", q:"A truck driver travelling at 54 km/h decelerates uniformly to 36 km/h over 36 s. Find (i) the deceleration and (ii) the distance travelled during this time, and verify your answer using both equations of motion.", given:"u=15 m/s, v=10 m/s, t=36 s", formula:"a=(v−u)/t ; s=½(u+v)t ; verify with v²=u²+2as", sub:"a=(10−15)/36=−5/36≈−0.139 ; s=½(15+10)×36=450 ; check: 100=225+2×(−5/36)×450=225−125=100 ✓", ans:"deceleration ≈ 0.139 m/s², distance = 450 m (verified consistent by both equations)"},
{diff:"vhard", q:"A car accelerates uniformly from 18 km/h to 36 km/h while covering 100 m. It then continues accelerating at the same rate for a further 10 s. Find (i) the acceleration, (ii) the velocity after the additional 10 s, and (iii) the additional distance covered in those 10 s.", given:"u=5 m/s, v=10 m/s, s=100 m (first phase)", formula:"v²=u²+2as ; v=u+at ; s=ut+½at²", sub:"100=25+200a ⟹ a=0.375 ; v_new=10+0.375×10=13.75 ; s_extra=10×10+½×0.375×100=100+18.75", ans:"a = 0.375 m/s², final velocity = 13.75 m/s, additional distance = 118.75 m"},
{diff:"vhard", q:"Two particles start simultaneously from the same point along the same straight line. Particle A moves with uniform velocity 8 m/s. Particle B starts from rest with uniform acceleration 4 m/s². Find the time after which B catches up with A, and the distance each has covered by then.", given:"x_A(t)=8t ; x_B(t)=½×4×t²=2t²", formula:"Set x_A(t) = x_B(t) and solve for t", sub:"8t=2t² ⟹ 4=t (dividing by 2t, t≠0)", ans:"t = 4 s; both have covered 32 m at that instant"}
];

/* =====================================================================
   STATE
   ===================================================================== */
const STATE = {
  theme: "dark",
  learned: new Set(),
  bookmarks: [],          // {type, idx, label}
  currentQTab: "mcq",
  quiz: null,
  exam: null
};

const DAILY_TIPS = [
 "When a numerical gives time AND asks for distance, but velocity isn't directly needed — go straight for s = ut + ½at², not v² = u² + 2as.",
 "Always convert km/h → m/s using ×5/18 BEFORE you substitute into any kinematic equation. It is the single most common silly mistake in board exams.",
 "Distance is never negative. Displacement can be. If your final answer for distance is negative, you made an arithmetic error somewhere.",
 "On a velocity-time graph: slope = acceleration, area = displacement. Memorise this pair — it solves almost every graph question asked.",
 "Uniform circular motion is ALWAYS accelerated motion, even at constant speed — because direction of velocity keeps changing. This is a guaranteed HOTS question.",
 "Stopping distance grows with the SQUARE of speed (s ∝ u²). Double the speed, and you need four times the braking distance — not twice.",
 "State your positive direction convention before assigning + or − signs in any motion numerical. Examiners reward this explicit step.",
 "An object can have zero velocity and yet non-zero acceleration — like a ball at the very top of its vertical throw. Don't assume zero v means zero a.",
 "For one-directional straight-line motion only: distance = |displacement|, and speed = |velocity|. Outside that special case, they can differ.",
 "When asked to derive an equation of motion 'graphically', always mention BOTH the slope (for v=u+at) and the area (for s=ut+½at²) explicitly."
];

/* =====================================================================
   INIT
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  wireNav();
  wireTheme();
  wireSearch();
  renderHome();
  renderTopics();
  renderFormulas();
  wireQBankTabs();
  renderQBankTab("mcq");
  wireQuiz();
  wireExam();
  renderBookmarks();
  initHeroCanvas();
  initGraphLab();
  updateProgressRing();
});

/* =====================================================================
   NAVIGATION
   ===================================================================== */
function wireNav(){
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      const sec = link.dataset.section;
      showSection(sec);
      if(sec === "qbank" && link.dataset.tab){
        setQBankTab(link.dataset.tab);
      }
      closeMobileSidebar();
    });
  });

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("sidebarScrim").classList.toggle("show");
  });
  document.getElementById("sidebarScrim").addEventListener("click", closeMobileSidebar);
}
function closeMobileSidebar(){
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarScrim").classList.remove("show");
}
function showSection(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById("screen-" + id);
  if(el) el.classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

/* =====================================================================
   THEME TOGGLE
   ===================================================================== */
function wireTheme(){
  document.getElementById("themeToggle").addEventListener("click", () => {
    const body = document.body;
    const isLight = body.classList.toggle("light-mode");
    document.getElementById("iconMoon").style.display = isLight ? "" : "none";
    document.getElementById("iconSun").style.display = isLight ? "none" : "";
    showToast(isLight ? "Light mode on" : "Dark mode on");
  });
}

/* =====================================================================
   TOAST
   ===================================================================== */
let toastTimer = null;
function showToast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* =====================================================================
   HOME SCREEN
   ===================================================================== */
function renderHome(){
  rotateTip();
  document.getElementById("newTipBtn").addEventListener("click", rotateTip);
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      hero.mode = btn.dataset.mode;
      hero.t = 0;
    });
  });
  document.getElementById("heroPlay").addEventListener("click", (e) => {
    hero.playing = !hero.playing;
    e.target.textContent = hero.playing ? "⏸ Pause" : "▶ Play";
  });
  document.getElementById("heroReset").addEventListener("click", () => { hero.t = 0; });
}
function rotateTip(){
  const tip = DAILY_TIPS[Math.floor(Math.random()*DAILY_TIPS.length)];
  document.getElementById("dailyTip").textContent = tip;
}

/* =====================================================================
   TOPICS SCREEN
   ===================================================================== */
function renderTopics(filterText="", chFilter="all"){
  const grid = document.getElementById("topicGrid");
  grid.innerHTML = "";
  const ft = filterText.trim().toLowerCase();
  TOPICS.filter(t => {
    if(chFilter !== "all" && t.ch !== chFilter) return false;
    if(!ft) return true;
    return (t.title + t.def + t.exp).toLowerCase().includes(ft);
  }).forEach(t => {
    const card = document.createElement("div");
    card.className = "glass topic-card";
    const learned = STATE.learned.has(t.id);
    card.innerHTML = `
      <div class="topic-card-top">
        <span class="topic-num">TOPIC ${String(t.id).padStart(2,"0")}</span>
        <span class="topic-tag">${t.ch === "1" ? "S.Chand Ch.1" : "NCERT Ch.4"}</span>
      </div>
      <h4>${t.title}</h4>
      <div class="topic-field"><b>Definition:</b> ${t.def}</div>
      <div class="topic-field"><b>Explained simply:</b> ${t.exp}</div>
      <div class="topic-field"><b>Real-life example:</b> ${t.ex}</div>
      <span class="topic-formula">${t.formula}</span>
      <button class="expand-btn" data-id="${t.id}">+ Exam tips, common mistakes &amp; memory tricks</button>
      <div class="topic-extra" id="extra-${t.id}">
        <div class="topic-field"><b>Exam tip:</b> ${t.tip}</div>
        <div class="topic-field"><b>Common mistake:</b> ${t.mistake}</div>
        <div class="topic-field"><b>Memory trick:</b> ${t.trick}</div>
        <div class="topic-field"><b>Board note:</b> ${t.note}</div>
      </div>
      <div class="topic-foot">
        <label class="learn-toggle">
          <input type="checkbox" data-learn="${t.id}" ${learned ? "checked" : ""}>
          Mark as learned
        </label>
        <button class="star-btn ${isBookmarked('topic',t.id)?'active':''}" data-bm-type="topic" data-bm-id="${t.id}" title="Bookmark">★</button>
      </div>`;
    grid.appendChild(card);
  });

  grid.querySelectorAll(".expand-btn").forEach(b => {
    b.addEventListener("click", () => {
      document.getElementById("extra-" + b.dataset.id).classList.toggle("show");
    });
  });
  grid.querySelectorAll('input[data-learn]').forEach(cb => {
    cb.addEventListener("change", () => {
      const id = Number(cb.dataset.learn);
      if(cb.checked) STATE.learned.add(id); else STATE.learned.delete(id);
      updateProgressRing();
    });
  });
  grid.querySelectorAll(".star-btn").forEach(b => {
    b.addEventListener("click", () => toggleBookmark(b.dataset.bmType, Number(b.dataset.bmId) || b.dataset.bmId, b));
  });

  document.getElementById("topicSearch").oninput = (e) => renderTopics(e.target.value, document.getElementById("topicFilter").value);
  document.getElementById("topicFilter").onchange = (e) => renderTopics(document.getElementById("topicSearch").value, e.target.value);
}
function updateProgressRing(){
  const pct = Math.round((STATE.learned.size / TOPICS.length) * 100);
  const ringFg = document.getElementById("ringFg");
  const circumference = 2 * Math.PI * 15.5;
  ringFg.style.strokeDasharray = circumference;
  ringFg.style.strokeDashoffset = circumference - (circumference * pct / 100);
  document.getElementById("progressLabel").textContent = pct + "%";
}

/* =====================================================================
   FORMULA FLASHCARDS
   ===================================================================== */
function renderFormulas(list = FORMULAS){
  const grid = document.getElementById("formulaGrid");
  grid.innerHTML = "";
  list.forEach((f) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <span class="f-label">Formula</span>
          <span class="f-name">${f.name}</span>
        </div>
        <div class="flip-face flip-back">
          <span class="f-label">Reveal</span>
          <span class="f-formula">${f.formula}</span>
        </div>
      </div>`;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });
  document.getElementById("shuffleFormulas").onclick = () => {
    const shuffled = [...FORMULAS].sort(() => Math.random() - 0.5);
    renderFormulas(shuffled);
  };
}

/* =====================================================================
   QUESTION BANK
   ===================================================================== */
function wireQBankTabs(){
  document.querySelectorAll(".qtab").forEach(tab => {
    tab.addEventListener("click", () => setQBankTab(tab.dataset.tab));
  });
  document.getElementById("cnt-mcq").textContent = MCQ.length;
  document.getElementById("cnt-ar").textContent = AR.length;
  document.getElementById("cnt-vsq").textContent = VSQ.length;
  document.getElementById("cnt-sq").textContent = SQ.length;
  document.getElementById("cnt-lq").textContent = LQ.length;
  document.getElementById("cnt-hots").textContent = HOTS.length;
  document.getElementById("cnt-case").textContent = CASES.length;
  document.getElementById("cnt-num").textContent = NUM.length;
}
function setQBankTab(tab){
  STATE.currentQTab = tab;
  document.querySelectorAll(".qtab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
  renderQBankTab(tab);
}
function renderQBankTab(tab){
  const body = document.getElementById("qbankBody");
  body.innerHTML = "";
  if(tab === "mcq") MCQ.forEach((item,i) => body.appendChild(renderMCQItem(item,i,"mcq")));
  else if(tab === "ar") AR.forEach((item,i) => body.appendChild(renderARItem(item,i)));
  else if(tab === "vsq") VSQ.forEach((item,i) => body.appendChild(renderSimpleQA(item,i,"vsq","Very Short Answer")));
  else if(tab === "sq") SQ.forEach((item,i) => body.appendChild(renderSimpleQA(item,i,"sq","Short Answer")));
  else if(tab === "lq") LQ.forEach((item,i) => body.appendChild(renderSimpleQA(item,i,"lq","Long Answer")));
  else if(tab === "hots") HOTS.forEach((item,i) => body.appendChild(renderSimpleQA(item,i,"hots","HOTS")));
  else if(tab === "case") CASES.forEach((item,i) => body.appendChild(renderCaseItem(item,i)));
  else if(tab === "num") NUM.forEach((item,i) => body.appendChild(renderNumItem(item,i)));
}

function renderMCQItem(item, i, type){
  const div = document.createElement("div");
  div.className = "glass q-item";
  const optsHtml = item.o.map((opt,oi) => `<li class="opt" data-oi="${oi}">${String.fromCharCode(65+oi)}. ${opt}</li>`).join("");
  div.innerHTML = `
    <div class="q-head">
      <div class="q-meta">MCQ ${i+1}</div>
      <button class="star-btn ${isBookmarked(type,i)?'active':''}" data-bm-type="${type}" data-bm-id="${i}">★</button>
    </div>
    <p class="q-text">${item.q}</p>
    <ul class="opt-list">${optsHtml}</ul>
    <div class="answer-box"><b>Explanation:</b> ${item.e}</div>`;
  div.querySelectorAll(".opt").forEach(li => {
    li.addEventListener("click", () => {
      if(div.dataset.answered) return;
      div.dataset.answered = "1";
      const oi = Number(li.dataset.oi);
      div.querySelectorAll(".opt").forEach((o,idx2) => {
        if(idx2 === item.a) o.classList.add("correct");
        else if(idx2 === oi) o.classList.add("wrong");
      });
      div.querySelector(".answer-box").classList.add("show");
    });
  });
  div.querySelector(".star-btn").addEventListener("click", (e) => toggleBookmark(type, i, e.target));
  return div;
}

function renderARItem(item, i){
  const div = document.createElement("div");
  div.className = "glass q-item";
  const optsHtml = AR_OPTIONS.map((opt,oi) => `<li class="opt" data-oi="${oi}">${String.fromCharCode(65+oi)}. ${opt}</li>`).join("");
  div.innerHTML = `
    <div class="q-head">
      <div class="q-meta">Assertion–Reason ${i+1}</div>
      <button class="star-btn ${isBookmarked('ar',i)?'active':''}" data-bm-type="ar" data-bm-id="${i}">★</button>
    </div>
    <p class="q-text"><b>Assertion (A):</b> ${item.a}<br><b>Reason (R):</b> ${item.r}</p>
    <ul class="opt-list">${optsHtml}</ul>
    <div class="answer-box"><b>Explanation:</b> ${item.e}</div>`;
  div.querySelectorAll(".opt").forEach(li => {
    li.addEventListener("click", () => {
      if(div.dataset.answered) return;
      div.dataset.answered = "1";
      const oi = Number(li.dataset.oi);
      div.querySelectorAll(".opt").forEach((o,idx2) => {
        if(idx2 === item.ans) o.classList.add("correct");
        else if(idx2 === oi) o.classList.add("wrong");
      });
      div.querySelector(".answer-box").classList.add("show");
    });
  });
  div.querySelector(".star-btn").addEventListener("click", (e) => toggleBookmark('ar', i, e.target));
  return div;
}

function renderSimpleQA(item, i, type, label){
  const div = document.createElement("div");
  div.className = "glass q-item";
  div.innerHTML = `
    <div class="q-head">
      <div class="q-meta">${label} ${i+1}</div>
      <button class="star-btn ${isBookmarked(type,i)?'active':''}" data-bm-type="${type}" data-bm-id="${i}">★</button>
    </div>
    <p class="q-text">${item.q}</p>
    <button class="reveal-btn">Show Answer ▾</button>
    <div class="answer-box"><b>Answer:</b> ${item.a.replace(/\n/g,"<br><br>")}</div>`;
  div.querySelector(".reveal-btn").addEventListener("click", (e) => {
    div.querySelector(".answer-box").classList.toggle("show");
    e.target.textContent = div.querySelector(".answer-box").classList.contains("show") ? "Hide Answer ▴" : "Show Answer ▾";
  });
  div.querySelector(".star-btn").addEventListener("click", (e) => toggleBookmark(type, i, e.target));
  return div;
}

function renderCaseItem(item, i){
  const div = document.createElement("div");
  div.className = "glass q-item";
  const subsHtml = item.subs.map((s,si) => `
    <div style="margin-top:12px">
      <p class="q-text" style="margin-bottom:6px"><b>(${si+1})</b> ${s.q}</p>
      <button class="reveal-btn">Show Answer ▾</button>
      <div class="answer-box"><b>Answer:</b> ${s.a}</div>
    </div>`).join("");
  div.innerHTML = `
    <div class="q-head">
      <div class="q-meta">Case Study ${i+1}</div>
      <button class="star-btn ${isBookmarked('case',i)?'active':''}" data-bm-type="case" data-bm-id="${i}">★</button>
    </div>
    <h4 style="margin:2px 0 10px; font-family:var(--font-display)">${item.title}</h4>
    <div class="case-passage">${item.passage}</div>
    ${subsHtml}`;
  div.querySelectorAll(".reveal-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const box = e.target.nextElementSibling;
      box.classList.toggle("show");
      e.target.textContent = box.classList.contains("show") ? "Hide Answer ▴" : "Show Answer ▾";
    });
  });
  div.querySelector(".star-btn").addEventListener("click", (e) => toggleBookmark('case', i, e.target));
  return div;
}

function renderNumItem(item, i){
  const div = document.createElement("div");
  div.className = "glass q-item";
  const diffClass = {easy:"diff-easy", medium:"diff-medium", hard:"diff-hard", vhard:"diff-vhard"}[item.diff];
  const diffLabel = {easy:"Easy", medium:"Medium", hard:"Hard", vhard:"Very Hard"}[item.diff];
  div.innerHTML = `
    <div class="q-head">
      <div class="q-meta"><span class="diff-badge ${diffClass}">${diffLabel}</span> &nbsp; Numerical ${i+1}</div>
      <button class="star-btn ${isBookmarked('num',i)?'active':''}" data-bm-type="num" data-bm-id="${i}">★</button>
    </div>
    <p class="q-text">${item.q}</p>
    <button class="reveal-btn">Show Full Solution ▾</button>
    <div class="answer-box">
      <div class="num-block">
        <div><b>Given:</b> ${item.given}</div>
        <div><b>Formula:</b> ${item.formula}</div>
        <div><b>Substitution:</b> ${item.sub}</div>
        <div><b>Final Answer:</b> ${item.ans}</div>
      </div>
    </div>`;
  div.querySelector(".reveal-btn").addEventListener("click", (e) => {
    div.querySelector(".answer-box").classList.toggle("show");
    e.target.textContent = div.querySelector(".answer-box").classList.contains("show") ? "Hide Solution ▴" : "Show Full Solution ▾";
  });
  div.querySelector(".star-btn").addEventListener("click", (e) => toggleBookmark('num', i, e.target));
  return div;
}

/* =====================================================================
   BOOKMARKS
   ===================================================================== */
function isBookmarked(type, id){
  return STATE.bookmarks.some(b => b.type === type && b.id === id);
}
function toggleBookmark(type, id, btn){
  const idx = STATE.bookmarks.findIndex(b => b.type === type && b.id === id);
  if(idx >= 0){
    STATE.bookmarks.splice(idx,1);
    if(btn) btn.classList.remove("active");
    showToast("Removed from bookmarks");
  } else {
    STATE.bookmarks.push({type, id});
    if(btn) btn.classList.add("active");
    showToast("Bookmarked ★");
  }
  document.getElementById("bmCount").textContent = STATE.bookmarks.length;
  renderBookmarks();
}
function bookmarkLabel(type){
  return {topic:"Topic Note", mcq:"MCQ", ar:"Assertion–Reason", vsq:"Very Short", sq:"Short Answer", lq:"Long Answer", hots:"HOTS", case:"Case Study", num:"Numerical"}[type] || type;
}
function renderBookmarks(){
  const list = document.getElementById("bookmarkList");
  list.innerHTML = "";
  if(STATE.bookmarks.length === 0){
    list.innerHTML = `<div class="glass q-item"><p class="q-text">No bookmarks yet. Tap any ★ on a topic or question to save it here for quick revision.</p></div>`;
    return;
  }
  STATE.bookmarks.forEach(b => {
    const div = document.createElement("div");
    div.className = "glass q-item";
    let text = "";
    if(b.type === "topic"){ const t = TOPICS.find(x=>x.id===b.id); text = t ? `<b>${t.title}</b><br>${t.def}` : "(removed)"; }
    else if(b.type === "mcq"){ text = MCQ[b.id] ? MCQ[b.id].q : "(removed)"; }
    else if(b.type === "ar"){ text = AR[b.id] ? `A: ${AR[b.id].a}<br>R: ${AR[b.id].r}` : "(removed)"; }
    else if(b.type === "vsq"){ text = VSQ[b.id] ? VSQ[b.id].q : "(removed)"; }
    else if(b.type === "sq"){ text = SQ[b.id] ? SQ[b.id].q : "(removed)"; }
    else if(b.type === "lq"){ text = LQ[b.id] ? LQ[b.id].q : "(removed)"; }
    else if(b.type === "hots"){ text = HOTS[b.id] ? HOTS[b.id].q : "(removed)"; }
    else if(b.type === "case"){ text = CASES[b.id] ? CASES[b.id].title : "(removed)"; }
    else if(b.type === "num"){ text = NUM[b.id] ? NUM[b.id].q : "(removed)"; }
    div.innerHTML = `
      <div class="q-head">
        <div class="q-meta">${bookmarkLabel(b.type)}</div>
        <button class="star-btn active">★ Remove</button>
      </div>
      <p class="q-text">${text}</p>`;
    div.querySelector(".star-btn").addEventListener("click", (e) => toggleBookmark(b.type, b.id, null));
    list.appendChild(div);
  });
}

/* =====================================================================
   SEARCH
   ===================================================================== */
function wireSearch(){
  const input = document.getElementById("globalSearch");
  const results = document.getElementById("searchResults");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if(q.length < 2){ results.classList.remove("show"); results.innerHTML=""; return; }
    const hits = [];
    TOPICS.forEach(t => { if((t.title+t.def).toLowerCase().includes(q)) hits.push({tag:"Topic", label:t.title, go:()=>{showSection("topics"); document.getElementById("topicSearch").value=t.title; renderTopics(t.title);}}); });
    FORMULAS.forEach(f => { if((f.name+f.formula).toLowerCase().includes(q)) hits.push({tag:"Formula", label:f.name+" — "+f.formula, go:()=>showSection("formulas")}); });
    MCQ.forEach((m,i) => { if(m.q.toLowerCase().includes(q)) hits.push({tag:"MCQ", label:m.q, go:()=>{showSection("qbank"); setQBankTab("mcq");}}); });
    NUM.forEach((n,i) => { if(n.q.toLowerCase().includes(q)) hits.push({tag:"Numerical", label:n.q, go:()=>{showSection("qbank"); setQBankTab("num");}}); });

    results.innerHTML = "";
    if(hits.length === 0){ results.innerHTML = `<div class="sr-item">No matches found.</div>`; }
    hits.slice(0,8).forEach(h => {
      const div = document.createElement("div");
      div.className = "sr-item";
      div.innerHTML = `<span class="sr-tag">${h.tag}</span>${h.label.slice(0,90)}`;
      div.addEventListener("click", () => { h.go(); results.classList.remove("show"); input.value=""; closeMobileSidebar(); });
      results.appendChild(div);
    });
    results.classList.add("show");
  });
  document.addEventListener("click", (e) => {
    if(!e.target.closest(".search-wrap")) results.classList.remove("show");
  });
}

/* =====================================================================
   QUIZ MODE ENGINE
   ===================================================================== */
function buildPool(category){
  let pool = [];
  if(category === "mcq" || category === "mixed") MCQ.forEach((q,i) => pool.push({kind:"mcq", q, i}));
  if(category === "ar" || category === "mixed") AR.forEach((q,i) => pool.push({kind:"ar", q, i}));
  if(category === "num" || category === "mixed") NUM.forEach((q,i) => pool.push({kind:"num", q, i}));
  if(category === "mixed"){ VSQ.forEach((q,i) => pool.push({kind:"vsq", q, i})); SQ.forEach((q,i) => pool.push({kind:"sq", q, i})); }
  return pool.sort(() => Math.random() - 0.5);
}

function wireQuiz(){
  document.getElementById("startQuizBtn").addEventListener("click", () => {
    const category = document.getElementById("quizCategory").value;
    const count = Number(document.getElementById("quizCount").value);
    const perQTimer = Number(document.getElementById("quizTimer").value);
    const pool = buildPool(category).slice(0, count);
    if(pool.length === 0){ showToast("No questions available for that category."); return; }
    STATE.quiz = {pool, idx:0, score:0, perQTimer, timeLeft:perQTimer, timerId:null, log:[]};
    document.getElementById("quizSetup").style.display = "none";
    document.getElementById("quizResult").style.display = "none";
    document.getElementById("quizRunning").style.display = "block";
    showQuizQuestion();
  });
  document.getElementById("quizSkip").addEventListener("click", () => advanceQuiz(false, null));
  document.getElementById("quizQuit").addEventListener("click", () => endQuiz());
  document.getElementById("quizBookmarkBtn").addEventListener("click", () => {
    const cur = STATE.quiz.pool[STATE.quiz.idx];
    toggleBookmark(cur.kind, cur.i, null);
    showToast("Bookmarked for revision");
  });
}

function showQuizQuestion(){
  const Q = STATE.quiz;
  clearInterval(Q.timerId);
  const item = Q.pool[Q.idx];
  document.getElementById("quizProgressText").textContent = `Q${Q.idx+1} / ${Q.pool.length}`;
  document.getElementById("quizScoreText").textContent = `Score: ${Q.score}`;
  const body = document.getElementById("quizCardBody");

  let html = "";
  if(item.kind === "mcq"){
    html = `<p class="q-text">${item.q.q}</p><ul class="opt-list">${item.q.o.map((o,oi)=>`<li class="opt" data-oi="${oi}">${String.fromCharCode(65+oi)}. ${o}</li>`).join("")}</ul><div class="answer-box"><b>Explanation:</b> ${item.q.e}</div>`;
  } else if(item.kind === "ar"){
    html = `<p class="q-text"><b>Assertion:</b> ${item.q.a}<br><b>Reason:</b> ${item.q.r}</p><ul class="opt-list">${AR_OPTIONS.map((o,oi)=>`<li class="opt" data-oi="${oi}">${String.fromCharCode(65+oi)}. ${o}</li>`).join("")}</ul><div class="answer-box"><b>Explanation:</b> ${item.q.e}</div>`;
  } else if(item.kind === "num"){
    html = `<p class="q-text">${item.q.q}</p><button class="reveal-btn">Show Solution ▾</button><div class="answer-box"><div class="num-block"><div><b>Given:</b> ${item.q.given}</div><div><b>Formula:</b> ${item.q.formula}</div><div><b>Substitution:</b> ${item.q.sub}</div><div><b>Answer:</b> ${item.q.ans}</div></div></div>
      <div class="quiz-self-grade" style="margin-top:12px; display:none;"><button class="btn-primary small" data-grade="right">I got it right ✓</button> <button class="btn-ghost small" data-grade="wrong">I got it wrong ✕</button></div>`;
  } else {
    html = `<p class="q-text">${item.q.q}</p><button class="reveal-btn">Show Answer ▾</button><div class="answer-box"><b>Answer:</b> ${item.q.a.replace(/\n/g,"<br><br>")}</div>
      <div class="quiz-self-grade" style="margin-top:12px; display:none;"><button class="btn-primary small" data-grade="right">I got it right ✓</button> <button class="btn-ghost small" data-grade="wrong">I got it wrong ✕</button></div>`;
  }
  body.innerHTML = html;

  if(item.kind === "mcq" || item.kind === "ar"){
    body.querySelectorAll(".opt").forEach(li => {
      li.addEventListener("click", () => {
        if(body.dataset.answered) return;
        body.dataset.answered = "1";
        clearInterval(Q.timerId);
        const oi = Number(li.dataset.oi);
        const correctIdx = item.kind === "mcq" ? item.q.a : item.q.ans;
        const correct = oi === correctIdx;
        body.querySelectorAll(".opt").forEach((o,idx2) => {
          if(idx2 === correctIdx) o.classList.add("correct");
          else if(idx2 === oi) o.classList.add("wrong");
        });
        body.querySelector(".answer-box").classList.add("show");
        if(correct) Q.score++;
        Q.log.push({text: item.kind==="mcq" ? item.q.q : item.q.a, correct});
        setTimeout(() => advanceQuiz(null,null,true), 1400);
      });
    });
  } else {
    body.querySelector(".reveal-btn").addEventListener("click", (e) => {
      body.querySelector(".answer-box").classList.toggle("show");
      body.querySelector(".quiz-self-grade").style.display = "block";
    });
    body.querySelectorAll("[data-grade]").forEach(btn => {
      btn.addEventListener("click", () => {
        if(body.dataset.answered) return;
        body.dataset.answered = "1";
        clearInterval(Q.timerId);
        const correct = btn.dataset.grade === "right";
        if(correct) Q.score++;
        Q.log.push({text: item.q.q, correct});
        advanceQuiz(null,null,true);
      });
    });
  }

  if(Q.perQTimer > 0){
    Q.timeLeft = Q.perQTimer;
    document.getElementById("quizTimerText").textContent = `⏱ ${Q.timeLeft}s`;
    Q.timerId = setInterval(() => {
      Q.timeLeft--;
      document.getElementById("quizTimerText").textContent = `⏱ ${Q.timeLeft}s`;
      if(Q.timeLeft <= 0){
        clearInterval(Q.timerId);
        Q.log.push({text: item.q.q, correct:false});
        advanceQuiz(true);
      }
    }, 1000);
  } else {
    document.getElementById("quizTimerText").textContent = "⏱ —";
  }
}

function advanceQuiz(){
  const Q = STATE.quiz;
  if(!Q) return;
  Q.idx++;
  if(Q.idx >= Q.pool.length){ endQuiz(); return; }
  showQuizQuestion();
}

function endQuiz(){
  const Q = STATE.quiz;
  clearInterval(Q && Q.timerId);
  document.getElementById("quizRunning").style.display = "none";
  document.getElementById("quizSetup").style.display = "block";
  const resultBox = document.getElementById("quizResult");
  resultBox.style.display = "block";
  const pct = Q.pool.length ? Math.round((Q.score/Q.pool.length)*100) : 0;
  resultBox.innerHTML = `
    <h3>Quiz Complete</h3>
    <p class="result-score">${Q.score} / ${Q.pool.length} <span class="muted" style="font-size:1rem">(${pct}%)</span></p>
    <p class="muted">${pct >= 80 ? "Excellent work — you have this topic locked down." : pct >= 50 ? "Solid attempt — revisit the topics you missed below." : "Good first pass — go back to Topic Notes for the concepts you missed."}</p>
    <div>${Q.log.map(l => `<div class="review-item"><span class="${l.correct?'tagok':'tagbad'}">${l.correct?'✓':'✕'}</span> &nbsp; ${l.text}</div>`).join("")}</div>
    <button class="btn-primary" style="margin-top:16px" onclick="document.getElementById('quizResult').style.display='none'">Close</button>`;
}

/* =====================================================================
   EXAM MODE ENGINE
   ===================================================================== */
function wireExam(){
  document.getElementById("startExamBtn").addEventListener("click", () => {
    const duration = Number(document.getElementById("examDuration").value);
    const mcqPool = [...MCQ].map((q,i)=>({kind:"mcq",q,i})).sort(()=>Math.random()-0.5).slice(0,10);
    const arPool = [...AR].map((q,i)=>({kind:"ar",q,i})).sort(()=>Math.random()-0.5).slice(0,5);
    const numPool = [...NUM].map((q,i)=>({kind:"num",q,i})).sort(()=>Math.random()-0.5).slice(0,5);
    const sqPool = [...SQ].map((q,i)=>({kind:"sq",q,i})).sort(()=>Math.random()-0.5).slice(0,5);
    const all = [...mcqPool, ...arPool, ...numPool, ...sqPool];
    STATE.exam = {items: all, answers:{}, timeLeft: duration, timerId:null};
    document.getElementById("examSetup").style.display = "none";
    document.getElementById("examResult").style.display = "none";
    document.getElementById("examRunning").style.display = "block";
    renderExamQuestions();
    startExamClock();
  });
  document.getElementById("submitExamBtn").addEventListener("click", submitExam);
}

function renderExamQuestions(){
  const wrap = document.getElementById("examQuestions");
  wrap.innerHTML = "";
  STATE.exam.items.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "glass q-item";
    if(item.kind === "mcq" || item.kind === "ar"){
      const qText = item.kind === "mcq" ? item.q.q : `<b>Assertion:</b> ${item.q.a}<br><b>Reason:</b> ${item.q.r}`;
      const opts = item.kind === "mcq" ? item.q.o : AR_OPTIONS;
      div.innerHTML = `<div class="q-meta">Question ${idx+1} · ${item.kind==="mcq"?"MCQ":"Assertion–Reason"}</div>
        <p class="q-text">${qText}</p>
        <ul class="opt-list">${opts.map((o,oi)=>`<li class="opt" data-oi="${oi}">${String.fromCharCode(65+oi)}. ${o}</li>`).join("")}</ul>`;
      div.querySelectorAll(".opt").forEach(li => {
        li.addEventListener("click", () => {
          div.querySelectorAll(".opt").forEach(o=>o.classList.remove("correct","wrong"));
          div.querySelectorAll(".opt").forEach(o=>o.style.borderColor="");
          li.style.borderColor = "var(--accent)";
          STATE.exam.answers[idx] = Number(li.dataset.oi);
          updateExamProgress();
        });
      });
    } else {
      div.innerHTML = `<div class="q-meta">Question ${idx+1} · ${item.kind==="num"?"Numerical":"Short Answer"} (self-checked)</div>
        <p class="q-text">${item.q.q}</p>
        <textarea rows="3" style="width:100%; background:var(--panel-solid); border:1px solid var(--border); border-radius:8px; color:var(--text); padding:10px; font-family:inherit;" placeholder="Write your working / answer here (for your own practice)..."></textarea>`;
      div.querySelector("textarea").addEventListener("input", () => { STATE.exam.answers[idx] = "written"; updateExamProgress(); });
    }
    wrap.appendChild(div);
  });
}
function updateExamProgress(){
  document.getElementById("examProgress").textContent = `Answered: ${Object.keys(STATE.exam.answers).length} / ${STATE.exam.items.length}`;
}
function startExamClock(){
  const Ex = STATE.exam;
  const clockEl = document.getElementById("examClock");
  const tick = () => {
    const m = Math.floor(Ex.timeLeft/60).toString().padStart(2,"0");
    const s = (Ex.timeLeft%60).toString().padStart(2,"0");
    clockEl.textContent = `${m}:${s}`;
    if(Ex.timeLeft <= 0){ clearInterval(Ex.timerId); submitExam(); return; }
    Ex.timeLeft--;
  };
  tick();
  Ex.timerId = setInterval(tick, 1000);
}
function submitExam(){
  const Ex = STATE.exam;
  clearInterval(Ex.timerId);
  document.getElementById("examRunning").style.display = "none";
  const resultBox = document.getElementById("examResult");
  resultBox.style.display = "block";
  let score = 0, gradable = 0;
  let reviewHtml = "";
  Ex.items.forEach((item, idx) => {
    if(item.kind === "mcq" || item.kind === "ar"){
      gradable++;
      const correctIdx = item.kind === "mcq" ? item.q.a : item.q.ans;
      const given = Ex.answers[idx];
      const correct = given === correctIdx;
      if(correct) score++;
      const qText = item.kind === "mcq" ? item.q.q : item.q.a;
      reviewHtml += `<div class="review-item"><span class="${correct?'tagok':'tagbad'}">${correct?'✓':'✕'}</span> &nbsp; Q${idx+1}: ${qText}</div>`;
    } else {
      reviewHtml += `<div class="review-item">📝 Q${idx+1} (self-check): ${item.q.q} <br><span class="muted small">Model answer / solution available in the Question Bank → ${item.kind==="num"?"Numericals":"Short Answer"} section.</span></div>`;
    }
  });
  const pct = gradable ? Math.round((score/gradable)*100) : 0;
  resultBox.innerHTML = `
    <h3>Exam Submitted</h3>
    <p class="result-score">${score} / ${gradable} <span class="muted" style="font-size:1rem">auto-graded (${pct}%)</span></p>
    <p class="muted">${Ex.items.length - gradable} numerical/short-answer questions were for self-practice — check the Question Bank for full worked solutions.</p>
    <div>${reviewHtml}</div>
    <button class="btn-primary" style="margin-top:16px" onclick="document.getElementById('examResult').style.display='none'; document.getElementById('examSetup').style.display='block';">Close</button>`;
}

/* =====================================================================
   CANVAS: HERO LIVE MOTION CONSOLE
   ===================================================================== */
const hero = {mode:"uniform", t:0, playing:true};
function initHeroCanvas(){
  const canvas = document.getElementById("heroCanvas");
  const ctx = canvas.getContext("2d");
  let last = performance.now();

  function frame(now){
    const dt = Math.min((now-last)/1000, 0.05);
    last = now;
    if(hero.playing) hero.t += dt;
    drawHero(ctx, canvas);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
function getThemeColors(){
  const light = document.body.classList.contains("light-mode");
  return {
    grid: light ? "#c7d4ef" : "#1c2740",
    track: light ? "#9fb3da" : "#2b3a5c",
    accent: light ? "#0096c7" : "#4fd7ff",
    accent2: light ? "#5b5fc7" : "#7c8bff",
    text: light ? "#101426" : "#eaf0ff"
  };
}
function drawHero(ctx, canvas){
  const W = canvas.width, H = canvas.height;
  const C = getThemeColors();
  ctx.clearRect(0,0,W,H);

  let s=0, v=0, a=0, label="";
  const trackY = H*0.62, trackX0 = 40, trackX1 = W-40;

  if(hero.mode === "uniform"){
    v = 20; a = 0;
    s = (v*hero.t) % 100;
    label = "uniform";
  } else if(hero.mode === "accel"){
    a = 2; const u = 0;
    s = u*hero.t + 0.5*a*hero.t*hero.t;
    v = u + a*hero.t;
    if(s > 100){ hero.t = 0; s = 0; v = 0; }
    label = "accel";
  } else if(hero.mode === "decel"){
    const u = 25; a = -2.5;
    v = Math.max(u + a*hero.t, 0);
    s = v <= 0 ? (u*u)/(2*2.5) : u*hero.t + 0.5*a*hero.t*hero.t;
    if(v <= 0 && hero.t > (u/2.5)+0.6){ hero.t = 0; }
    label = "decel";
  }

  if(hero.mode !== "circular"){
    // draw track
    ctx.strokeStyle = C.track; ctx.lineWidth = 4; ctx.lineCap="round";
    ctx.beginPath(); ctx.moveTo(trackX0, trackY); ctx.lineTo(trackX1, trackY); ctx.stroke();
    for(let i=0;i<=10;i++){
      const x = trackX0 + (trackX1-trackX0)*i/10;
      ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, trackY-6); ctx.lineTo(x, trackY+6); ctx.stroke();
    }
    const px = trackX0 + (trackX1-trackX0) * Math.min(s/100,1);
    // dot
    ctx.beginPath(); ctx.arc(px, trackY, 9, 0, Math.PI*2);
    ctx.fillStyle = C.accent; ctx.shadowColor = C.accent; ctx.shadowBlur = 16; ctx.fill(); ctx.shadowBlur = 0;
    ctx.fillStyle = C.text; ctx.font = "11px JetBrains Mono, monospace"; ctx.textAlign="center";
    ctx.fillText("object", px, trackY-18);
  } else {
    const cx = W/2, cy = H/2 + 6, R = 78;
    v = 16; label="circular";
    const omega = v/R;
    const theta = hero.t * omega;
    s = v*hero.t;
    a = 0; // displayed qualitatively
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke();
    const px = cx + R*Math.cos(theta), py = cy + R*Math.sin(theta);
    // velocity tangent arrow
    const tx = -Math.sin(theta), ty = Math.cos(theta);
    ctx.strokeStyle = C.accent2; ctx.lineWidth = 2.4;
    ctx.beginPath(); ctx.moveTo(px,py); ctx.lineTo(px+tx*34, py+ty*34); ctx.stroke();
    ctx.beginPath(); ctx.arc(px+tx*34, py+ty*34, 3, 0, Math.PI*2); ctx.fillStyle=C.accent2; ctx.fill();
    ctx.beginPath(); ctx.arc(px,py,8,0,Math.PI*2);
    ctx.fillStyle = C.accent; ctx.shadowColor=C.accent; ctx.shadowBlur=16; ctx.fill(); ctx.shadowBlur=0;
    ctx.fillStyle = C.text; ctx.font="11px JetBrains Mono, monospace"; ctx.textAlign="center";
    ctx.fillText("v (tangent)", px+tx*34, py+ty*34-10);
  }

  document.getElementById("roS").textContent = s.toFixed(1) + " m";
  document.getElementById("roV").textContent = v.toFixed(1) + " m/s";
  document.getElementById("roA").textContent = hero.mode === "circular" ? "direction changing" : a.toFixed(1) + " m/s²";
  document.getElementById("roT").textContent = hero.t.toFixed(1) + " s";
}

/* =====================================================================
   CANVAS: GRAPH LAB
   ===================================================================== */
let ptMode = "uniform", vtMode = "const";
function initGraphLab(){
  document.querySelectorAll("[data-pt]").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("[data-pt]").forEach(x=>x.classList.remove("active")); b.classList.add("active");
    ptMode = b.dataset.pt; drawPosTime();
  }));
  document.querySelectorAll("[data-vt]").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("[data-vt]").forEach(x=>x.classList.remove("active")); b.classList.add("active");
    vtMode = b.dataset.vt; drawVelTime();
  }));
  ["slU","slA","slT"].forEach(id => document.getElementById(id).addEventListener("input", drawPlotter));

  drawPosTime(); drawVelTime(); drawPlotter();
  animateCircularLab();
}

function axes(ctx, W, H, pad, C){
  ctx.strokeStyle = C.track; ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.moveTo(pad, pad); ctx.lineTo(pad, H-pad); ctx.lineTo(W-pad, H-pad); ctx.stroke();
}

function drawPosTime(){
  const canvas = document.getElementById("cvPosTime");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height, pad = 36;
  const C = getThemeColors();
  ctx.clearRect(0,0,W,H);
  axes(ctx,W,H,pad,C);
  ctx.strokeStyle = C.accent; ctx.lineWidth = 2.6; ctx.beginPath();
  const N = 60;
  let slopeMsg = "";
  for(let i=0;i<=N;i++){
    const t = i/N;
    let posFrac;
    if(ptMode === "uniform"){ posFrac = t; }
    else if(ptMode === "nonuniform"){ posFrac = t*t; }
    else { posFrac = 0.4; }
    const x = pad + t*(W-2*pad);
    const y = (H-pad) - posFrac*(H-2*pad);
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.stroke();
  if(ptMode==="uniform") slopeMsg = "slope (velocity) = 20.0 m/s — straight line ⟹ uniform motion";
  else if(ptMode==="nonuniform") slopeMsg = "slope increasing ⟹ velocity increasing — non-uniform (accelerated) motion";
  else slopeMsg = "slope = 0 ⟹ object at rest (horizontal line)";
  document.getElementById("ptReadout").textContent = slopeMsg;
}

function drawVelTime(){
  const canvas = document.getElementById("cvVelTime");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height, pad = 36;
  const C = getThemeColors();
  ctx.clearRect(0,0,W,H);
  axes(ctx,W,H,pad,C);

  const T = 10;
  let v0, v1;
  if(vtMode === "const"){ v0=20; v1=20; }
  else if(vtMode === "up"){ v0=5; v1=25; }
  else { v0=25; v1=5; }

  const maxV = 30;
  const x0 = pad, x1 = W-pad;
  const y0 = (H-pad) - (v0/maxV)*(H-2*pad);
  const y1 = (H-pad) - (v1/maxV)*(H-2*pad);

  // shaded area
  ctx.beginPath();
  ctx.moveTo(x0, H-pad); ctx.lineTo(x0,y0); ctx.lineTo(x1,y1); ctx.lineTo(x1,H-pad); ctx.closePath();
  ctx.fillStyle = "rgba(79,215,255,0.16)"; ctx.fill();

  ctx.strokeStyle = C.accent; ctx.lineWidth = 2.6;
  ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x1,y1); ctx.stroke();

  const a = (v1-v0)/T;
  const area = 0.5*(v0+v1)*T;
  document.getElementById("vtReadout").textContent = `slope (a) = ${a.toFixed(1)} m/s² | area (s) = ${area.toFixed(1)} m`;
}

function animateCircularLab(){
  const canvas = document.getElementById("cvCircular");
  const ctx = canvas.getContext("2d");
  let theta = 0;
  function loop(){
    const W = canvas.width, H = canvas.height;
    const C = getThemeColors();
    ctx.clearRect(0,0,W,H);
    const cx = W/2, cy = H/2, R = 86;
    ctx.strokeStyle = C.track; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke();
    theta += 0.018;
    const px = cx+R*Math.cos(theta), py = cy+R*Math.sin(theta);
    const tx = -Math.sin(theta), ty = Math.cos(theta);
    ctx.strokeStyle = C.accent2; ctx.lineWidth = 2.4;
    ctx.beginPath(); ctx.moveTo(px,py); ctx.lineTo(px+tx*38,py+ty*38); ctx.stroke();
    ctx.beginPath(); ctx.arc(px,py,7,0,Math.PI*2);
    ctx.fillStyle = C.accent; ctx.shadowColor=C.accent; ctx.shadowBlur=14; ctx.fill(); ctx.shadowBlur=0;
    requestAnimationFrame(loop);
  }
  loop();
}

function drawPlotter(){
  const u = Number(document.getElementById("slU").value);
  const a = Number(document.getElementById("slA").value);
  const t = Number(document.getElementById("slT").value);
  document.getElementById("slUVal").textContent = u.toFixed(1);
  document.getElementById("slAVal").textContent = a.toFixed(1);
  document.getElementById("slTVal").textContent = t;

  const v = u + a*t;
  const s = u*t + 0.5*a*t*t;
  document.getElementById("plotReadout").textContent = `v = ${v.toFixed(1)} m/s | s = ${s.toFixed(1)} m`;

  const canvas = document.getElementById("cvPlotter");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height, pad = 34;
  const C = getThemeColors();
  ctx.clearRect(0,0,W,H);
  axes(ctx,W,H,pad,C);

  const maxV = Math.max(Math.abs(u), Math.abs(v), 5) * 1.3;
  const x0 = pad, x1 = W-pad;
  const zeroY = (H-pad) - ((0 - (-maxV))/(2*maxV))*(H-2*pad);
  const yFor = (val) => (H-pad) - ((val - (-maxV))/(2*maxV))*(H-2*pad);

  ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(x0, zeroY); ctx.lineTo(x1, zeroY); ctx.stroke();

  const y0 = yFor(u), y1 = yFor(v);
  ctx.beginPath();
  ctx.moveTo(x0, zeroY); ctx.lineTo(x0,y0); ctx.lineTo(x1,y1); ctx.lineTo(x1, zeroY); ctx.closePath();
  ctx.fillStyle = "rgba(124,139,255,0.18)"; ctx.fill();

  ctx.strokeStyle = C.accent; ctx.lineWidth = 2.6;
  ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x1,y1); ctx.stroke();
}
