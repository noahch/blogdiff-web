import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {ActivatedRoute} from '@angular/router';

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
            'title': 'How much experience do you have as professional software developer or in operations? (in years)',
            'inputType': 'number'
          },
          {
            'type': 'rating',
            'name': 'build_log_experience',
            'title': 'How often do you have to deal with build logs?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very often'
              },
              {
                'value': 2,
                'text': 'often'
              },
              {
                'value': 3,
                'text': 'sometimes'
              },
              {
                'value': 4,
                'text': 'almost never'
              },
              {
                'value': 5,
                'text': 'never'
              },
              {
                'value': '0',
                'text': 'no answer'
              }
            ]
          },
          {
            'type': 'radiogroup',
            'name': 'primary_language',
            'title': 'What is your primary programming language?',
            'hasOther': true,
            'choices': [
              {
                'value': 'java',
                'text': 'Java'
              },
              {
                'value': 'python',
                'text': 'Python'
              },
              {
                'value': 'c',
                'text': 'C'
              },
              {
                'value': 'cpp',
                'text': 'C++'
              },
              {
                'value': 'cs',
                'text': 'C#'
              },
              {
                'value': 'ruby',
                'text': 'Ruby'
              }
            ]
          },
          {
            'type': 'radiogroup',
            'name': 'build_tool_use',
            'title': 'What\'s the build tool you use the most often?',
            'hasOther': true,
            'choices': [
              {
                'value': 'maven',
                'text': 'Maven'
              },
              {
                'value': 'gradle',
                'text': 'Gradle'
              },
              {
                'value': 'ant',
                'text': 'Ant'
              },
              {
                'value': 'rake',
                'text': 'Rake'
              },
              {
                'value': 'grunt',
                'text': 'Grunt'
              },
              {
                'value': 'make',
                'text': 'Make'
              }
            ]
          },
          {
            'type': 'radiogroup',
            'name': 'ci_use',
            'title': 'What CI (continuous integration) platform do you use the most often?',
            'hasOther': true,
            'choices': [
              {
                'value': 'none',
                'text': 'none'
              },
              {
                'value': 'travis',
                'text': 'Travis-CI'
              },
              {
                'value': 'jenkins',
                'text': 'Jenkins'
              },
              {
                'value': 'circle',
                'text': 'Circle-CI'
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
            'title': 'How many of your builds fail (in percent)?',
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
            'title': 'How long does it usually take you to find the failure cause when looking at a build log (in minutes)?',
            'inputType': 'number'
          }
        ],
        'title': 'About your project',
        'description': 'Please give us some information about your current project. If you do not have any project in mind, please answer the questions in general.'
      },
      {
        'name': 'tool',
        'elements': [
          {
            'type': 'rating',
            'name': 'useful',
            'title': 'How would you rate BLogDiff in terms of usefulness?',
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
              },
              {
                'value': '0',
                'text': 'no answer'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'easy_to_use',
            'title': 'How would you rate BLogDiff in terms of its ease of use?',
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
              },
              {
                'value': '0',
                'text': 'no answer'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'filtering_noise',
            'title': 'Build logs contain noise (e.g. download speeds, timestamps, etc.) which is filtered by BLogDiff. Do you miss this kind of information?',
            'rateValues': [
              {
                'value': 1,
                'text': 'not at all'
              },
              {
                'value': 2,
                'text': 'rarely'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'sometimes'
              },
              {
                'value': 5,
                'text': 'yes, a lot'
              },
              {
                'value': '0',
                'text': 'no answer'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'integation',
            'title': 'How would you rate BLogDiff in terms of effort needed to integrate it in your daily workflow?',
            'rateValues': [
              {
                'value': 1,
                'text': 'very little effort'
              },
              {
                'value': 2,
                'text': 'little effort'
              },
              {
                'value': 3,
                'text': 'neutral'
              },
              {
                'value': 4,
                'text': 'much effort'
              },
              {
                'value': 5,
                'text': 'very much effort'
              },
              {
                'value': '0',
                'text': 'no answer'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'find_faster',
            'title': 'Based on your impression of BLogDiff, do you think the time to find the failure cause will change compared to your current method?',
            'rateValues': [
              {
                'value': 1,
                'text': 'it will be much faster'
              },
              {
                'value': 2,
                'text': 'it will be little faster'
              },
              {
                'value': 3,
                'text': 'it will not change'
              },
              {
                'value': 4,
                'text': 'it will be a little slower'
              },
              {
                'value': 5,
                'text': 'it will be much slower'
              },
              {
                'value': '0',
                'text': 'no answer'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'accuracy',
            'title': 'Based on your impression of BLogDiff, how would you rate the accurracy of the differencing presented?',
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
              },
              {
                'value': '0',
                'text': 'no answer'
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
              },
              {
                'value': '0',
                'text': 'no answer'
              }
            ]
          },
          {
            'type': 'rating',
            'name': 'use_again',
            'title': 'How likely are you to use the BLogDiff (again)?',
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
              },
              {
                'value': '0',
                'text': 'no answer'
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
              },
              {
                'value': '0',
                'text': 'no answer'
              }
            ]
          },
          {
            'type': 'comment',
            'name': 'suggestion',
            'title': 'Do you have any suggestions on how to improve BLogDiff?'
          },
          {
            'type': 'comment',
            'name': 'usually_process',
            'title': 'How do you usually process build logs?'
          }
        ],
        'title': 'About BLogDiff',
        'description': 'Tell us what you think about BLogDiff.'
      },
      {
        'name': 'wrapup',
        'elements': [
          {
            'type': 'comment',
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
            'type': 'radiogroup',
            'name': 'raffle',
            'title': 'Do you want to take part in the raffle for a 50$ gift card? (Please provide your email address)',
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
            'visibleIf': '{contact_again} = \'yes\' or {raffle} = \'yes\'',
            'title': 'Please enter you email address',
            'validators': [
              {
                'type': 'email'
              }
            ],
            'inputType': 'email'
          }
        ],
        'title': 'Wrap up',
        'description': 'A few last questions...'
      }
    ],
    'showProgressBar': 'top'
  };
  alreadyDone: boolean;
  usedTool: boolean;
  source: number;
  step = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {

      if (params['source'] !== undefined && !isNaN(Number(params['source']))) {
        this.source = params['source'];
      } else {
        this.source = 0;
      }
    });
  }

  ngOnInit() {
    this.alreadyDone = sessionStorage.getItem('surveySent') === 'true';
  }
  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    // TODO update with your own behavior

    this.dataService.survey(JSON.stringify(result), this.source, this.usedTool);
    sessionStorage.setItem('surveySent', 'true');
    console.log(JSON.stringify(result));
  }

}
