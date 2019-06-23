import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-diff-survey',
  templateUrl: './diff-survey.component.html',
  styleUrls: ['./diff-survey.component.css']
})
export class DiffSurveyComponent implements OnInit {

  json = {
    'pages': [
      {
        'name': 'survey',
        'elements': [
              {
                'type': 'radiogroup',
                'name': 'experience',
                'title': 'How many years have you worked as software developer?',
                'choices': [
                  {
                    'value': '1-3',
                    'text': '1-3 years'
                  },
                  {
                    'value': '3-6',
                    'text': '3-6 years'
                  },
                  {
                    'value': '6-9',
                    'text': '6-9 years'
                  },
                  {
                    'value': '9+',
                    'text': '9+ years'
                  }
                ]
              },
              {
                'type': 'radiogroup',
                'name': 'number_of_people',
                'title': 'How many people are working on your project?',
                'choices': [
                  {
                    'value': 'alone',
                    'text': 'I work alone'
                  },
                  {
                    'value': '2-3',
                    'text': '2-3 people'
                  },
                  {
                    'value': '3-5',
                    'text': '3-5 people'
                  },
                  {
                    'value': '5-10',
                    'text': '5-10 people'
                  },
                  {
                    'value': '10+',
                    'text': 'more than 10 people'
                  }
                ]
              },
              {
                'type': 'radiogroup',
                'name': 'failing_builds',
                'title': 'How often do you have failing builds?',
                'choices': [
                  {
                    'value': '2nd',
                    'text': 'Every 2nd build'
                  },
                  {
                    'value': '5th',
                    'text': 'Every 5th build'
                  },
                  {
                    'value': '10th',
                    'text': 'Every 10th build'
                  },
                  {
                    'value': 'never',
                    'text': 'Almost never'
                  }
                ]
              },
              {
                'type': 'radiogroup',
                'name': 'how_long',
                'title': 'How long does it usually take you to find the mistake when looking at the build log?',
                'choices': [
                  {
                    'value': '1-2',
                    'text': '1-2 min'
                  },
                  {
                    'value': '2-5',
                    'text': '2-5 min'
                  },
                  {
                    'value': '5-10',
                    'text': '5-10min'
                  },
                  {
                    'value': '10+',
                    'text': '10min+'
                  }
                ]
              },

              {
                'type': 'rating',
                'name': 'useful',
                'title': 'Do you think a tool such as BlogDiff is useful in general? Please rate from 1 (very useful) - 6 (not useful at all).',
                'rateMax': 6
              },
              {
                'type': 'rating',
                'name': 'integrate_workflow',
                'title': 'Do you think a tool such as BlogDiff could be easyily inegrated in your daily workflow? Please rate from 1 (easy to integrate) - 6 (not easy to integrate at all).',
                'rateMax': 6
              },
              {
                'type': 'rating',
                'name': 'find_faster',
                'title': 'Did you find your failure cause faster than usual? Please rate from 1 (much faster than usual) - 6 (much longer than usual).',
                'rateMax': 6
              },
              {
                'type': 'rating',
                'name': 'accuracy',
                'title': 'Did you think the differencing was accurate and provided any additional value? Please rate from 1 (accurate) - 6 (not accurate).',
                'rateMax': 6
              },
              {
                'type': 'rating',
                'name': 'use_again',
                'title': 'Would you use the tool again or recommend it to someone else? Please rate from 1 (I totally would use it again) - 6 (I would never use this tool again).',
                'rateMax': 6
              },
              {
                'type': 'text',
                'name': 'suggestions',
                'title': 'Do you have any suggestions or comments on how to improve the tool?'
              }
        ],
        'description': 'This project is part of a bachelors\' thesis of the University of Zurich. It would be highly appreciated, if you could answer the questions of this survey!'
      }
    ]
  };
  alreadyDone: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.alreadyDone = sessionStorage.getItem('surveySent') === 'true';
  }
  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    // TODO update with your own behavior
    this.dataService.survey(JSON.stringify(result));
    sessionStorage.setItem('surveySent', 'true');
    console.log(JSON.stringify(result));
  }

}
