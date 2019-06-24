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
        'name': 'demographics',
        'elements': [
          {
            'type': 'text',
            'name': 'age',
            'title': 'How old are you?',
            'validators': [
              {
                'type': 'numeric',
                'text': 'Please enter a valid age',
                'minValue': 12,
                'maxValue': 99
              }
            ],
            'inputType': 'number'
          },
          {
            'type': 'radiogroup',
            'name': 'gender',
            'title': 'Please select your gender',
            'choices': [
              {
                'value': 'm',
                'text': 'Male'
              },
              {
                'value': 'f',
                'text': 'Female'
              },
              {
                'value': 'other',
                'text': 'Other'
              },
              {
                'value': 'none',
                'text': 'I don\'t want to answer'
              }
            ]
          },
          {
            'type': 'radiogroup',
            'name': 'education',
            'title': 'What is your highest level of education?',
            'hasOther': true,
            'choices': [
              {
                'value': 'high_school',
                'text': 'High School'
              },
              {
                'value': 'college',
                'text': 'College'
              },
              {
                'value': 'training',
                'text': 'Trade/Technical/Vocational Training'
              },
              {
                'value': 'bachelor',
                'text': 'Bachelor\'s degree'
              },
              {
                'value': 'master',
                'text': 'Master\'s degree'
              },
              {
                'value': 'doctorate',
                'text': 'Doctorate Degree'
              },
              {
                'value': 'professional',
                'text': 'Professional Degree'
              }
            ]
          },
          {
            'type': 'radiogroup',
            'name': 'position',
            'title': 'What is your current position within your company?',
            'hasOther': true,
            'choices': [
              {
                'value': 'employee',
                'text': 'Employee'
              },
              {
                'value': 'assistant_manager',
                'text': 'Assistant Manager'
              },
              {
                'value': 'manager',
                'text': 'Manager'
              },
              {
                'value': 'senior_manager',
                'text': 'Senior Manager'
              }
            ]
          },
          {
            'type': 'text',
            'name': 'experience',
            'title': 'How many years of experience do you have in a technological environment?',
            'inputType': 'number'
          },
          {
            'type': 'radiogroup',
            'name': 'buildlogs_seen',
            'title': 'How many build logs have you seen so far?',
            'choices': [
              {
                'value': 'none',
                'text': 'none'
              },
              {
                'value': 'less10',
                'text': 'less than 10'
              },
              {
                'value': 'more10',
                'text': 'more than 10'
              }
            ]
          }
        ],
        'title': 'About you',
        'description': 'Please give us some information about you.'
      },
      {
        'name': 'project',
        'elements': [
          {
            'type': 'text',
            'name': 'month_on_project',
            'title': 'Since how many month are you working on your project?',
            'inputType': 'number'
          },
          {
            'type': 'text',
            'name': 'people_on_project',
            'title': 'How many people are working on your project?',
            'inputType': 'number'
          },
          {
            'type': 'radiogroup',
            'name': 'role',
            'title': 'What is your role within the project?',
            'hasOther': true,
            'choices': [
              {
                'value': 'junior_dev',
                'text': 'Junior Developer'
              },
              {
                'value': 'senior_dev',
                'text': 'Senior Developer'
              },
              {
                'value': 'architect',
                'text': 'Software Architect'
              },
              {
                'value': 'quality_assurance',
                'text': 'Quality Assurance / Tester'
              },
              {
                'value': 'product_owner',
                'text': 'Product Owner'
              },
              {
                'value': 'project_manager',
                'text': 'Project Manager'
              },
              {
                'value': 'technical_lead',
                'text': 'Technical Lead'
              },
              {
                'value': 'cto',
                'text': 'CTO'
              }
            ]
          },
          {
            'type': 'text',
            'name': 'failing_builds',
            'title': 'How often do you have failing builds (in percent)?',
            'validators': [
              {
                'type': 'numeric',
                'text': 'Please enter a valid value (0-100)',
                'minValue': 0,
                'maxValue': 100
              }
            ],
            'inputType': 'number'
          },
          {
            'type': 'text',
            'name': 'time_to_find_failure',
            'title': 'How long does it usually take you to find the failure cause when looking at the build log (in minutes)?',
            'inputType': 'number'
          }
        ],
        'title': 'About your project',
        'description': 'Please give us some information about your project. If you do not have any project in mind, please answer the questions in general.'
      },
      {
        'name': 'tool',
        'elements': [
          {
            'type': 'rating',
            'name': 'useful',
            'title': 'Do you think a tool such as BLogDiff is useful in general?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very useful'
              },
              {
                'value': 2,
                'text': 'useful'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'not useful'
              },
              {
                'value': 5,
                'text': 'not useful at all'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'easy_to_use',
            'title': 'Do you think BLogDiff is easy to use?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very easy'
              },
              {
                'value': 2,
                'text': 'easy'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'not easy'
              },
              {
                'value': 5,
                'text': 'not easy at all'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'filtering_noise',
            'title': 'Do you think filtering noise (e.g. download speeds, timestamps, etc.) is useful?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very useful'
              },
              {
                'value': 2,
                'text': 'useful'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'not useful'
              },
              {
                'value': 5,
                'text': 'not useful at all'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'integation',
            'title': 'Do you think a tool such as BLogDiff could be easily inegrated in your daily workflow?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very easily'
              },
              {
                'value': 2,
                'text': 'easily'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'not easily'
              },
              {
                'value': 5,
                'text': 'not easily at all'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'find_faster',
            'title': 'Did you find your failure cause faster than usual?',
            'rateValues': [
              {
                'value': 1,
                'text': 'much faster'
              },
              {
                'value': 2,
                'text': 'a little faster'
              },
              {
                'value': 3,
                'text': 'as long as usual'
              },
              {
                'value': 4,
                'text': 'a little slower'
              },
              {
                'value': 5,
                'text': 'much slower'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'accuracy',
            'title': 'Do you think the differencing was accurate?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very accurate'
              },
              {
                'value': 2,
                'text': 'accurate'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'not accurate'
              },
              {
                'value': 5,
                'text': 'not accurate at all'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'advantage',
            'title': 'Do you think BLogDiff provides an advantage compared to looking at a plain build log?',
            'rateValues': [
              {
                'value': 1,
                'text': 'big advantage'
              },
              {
                'value': 2,
                'text': 'small advantage'
              },
              {
                'value': 3,
                'text': 'no advantage/no disadvantage'
              },
              {
                'value': 4,
                'text': 'small disadvantage'
              },
              {
                'value': 5,
                'text': 'big disadvantage'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'use_again',
            'title': 'How likely are you to use the BLogDiff again?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very likely'
              },
              {
                'value': 2,
                'text': 'likely'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'not likely'
              },
              {
                'value': 5,
                'text': 'not likely at all'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'recommend',
            'title': 'How likely are you to recommend BLogDiff to a friend?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very likely'
              },
              {
                'value': 2,
                'text': 'likely'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'not likely'
              },
              {
                'value': 5,
                'text': 'not likely at all'
              }
            ]
          },
          {
            'type': 'text',
            'name': 'suggestion',
            'title': 'Do you have any suggestions on how to improve BLogDiff?'
          },
          {
            'type': 'text',
            'name': 'comment',
            'title': 'Do you have any other comments?'
          },
          {
            'type': 'radiogroup',
            'name': 'contact_again',
            'title': 'May we contact you in case we have any further questions? ',
            'choices': [
              {
                'value': 'yes',
                'text': 'yes'
              },
              {
                'value': 'no',
                'text': 'no'
              }
            ]
          },
          {
            'type': 'text',
            'name': 'email',
            'visibleIf': '{contact_again} = \'yes\'',
            'title': 'Your email address?',
            'validators': [
              {
                'type': 'email'
              }
            ],
            'inputType': 'email'
          }
        ],
        'title': 'About BLogDiff',
        'description': 'Tell us what you think about BLogDiff.'
      }
    ],
    'showProgressBar': 'top'
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
