#!/usr/bin/env python

from nltk.sentiment.vader import SentimentIntensityAnalyzer
import sys

if len(sys.argv)==1:
    sent_type = "compound"
else:
    sent_type = sys.argv[1]
if sent_type == "help":
    print "sentiments: compound, neg, neu, pos."
else:
    for line in sys.stdin:
        print SentimentIntensityAnalyzer().polarity_scores(line)[sent_type]

