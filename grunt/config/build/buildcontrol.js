// Configuration for Clean task(s)
// Deletes specified folders/files
'use strict';

var pkg = require('../../../package.json');

var taskConfig = function(grunt) {

	grunt.config.set('buildcontrol', {
		options: {
			dir: 'dist',
			commit: true,
			push: true,
			message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
		},
		pages: {
			options: {
				remote: 'git@github.com:example_user/example_webapp.git',
				branch: 'gh-pages'
			}
		},
		github: {
			options: {
				remote: 'https://github.com/jernejc/m.proto.git',
				branch: 'production',
				tag: pkg.version,
				login: 'jernejc',
				token: 'c2902jgit'
			}
		},
		local: {
			options: {
				remote: '../',
				branch: 'build'
			}
		}
	});

};

module.exports = taskConfig;
